import type { Request, Response, NextFunction } from "express";
import { param, validationResult, body } from "express-validator";
import Bugdget from "../models/Budget";

declare global {
  namespace Express {
    interface Request {
      budget?: Bugdget;
    }
  }
}
export const validateBudgetId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await param("id")
    .isInt()
    .withMessage("ID no válido")
    .custom((value) => value > 0)
    .withMessage("ID no válido")
    .run(req);
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const validateBudgetExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { budgetId } = req.params;
    const budget = await Bugdget.findByPk(budgetId);
    if (!budget) {
      const error = new Error("Presupuesto no encontrado");
      res.status(404).json({ message: error.message });
      return;
    }
    req.budget = budget;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Hubo un error" });
  }
};

export const validateBudgetInput = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await body("name")
    .notEmpty()
    .withMessage("El nombre del presupuesto no puede ir vacio")
    .run(req);
  await body("amount")
    .notEmpty()
    .withMessage("La cantidad del presupuesto no puede ir vacio")
    .isNumeric()
    .withMessage("Cantidad no válida")
    .custom((value) => value > 0)
    .withMessage("presupuesto debe ser mayor a 0")
    .run(req);
  next();
};
