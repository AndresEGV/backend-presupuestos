import type { Request, Response } from "express";
import Bugdget from "../models/Budget";

export class BudgetController {
  static getAll = async (req: Request, res: Response) => {
    try {
      const budgets = await Bugdget.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.json(budgets);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Hubo un error" });
    }
  };
  static create = async (req: Request, res: Response) => {
    try {
      const budget = new Bugdget(req.body);
      await budget.save();
      res.status(201).json("Presupuesto creado correctamente");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Hubo un error" });
    }
  };

  static getById = async (req: Request, res: Response) => {
    res.json(req.budget);
  };

  static updateById = async (req: Request, res: Response) => {
    await req.budget.update(req.body);
    res.json("Presupuesto actualizado correctamente");
  };
  static deleteById = async (req: Request, res: Response) => {
    await req.budget.destroy();
    res.json("Presupuesto eliminado correctamente");
  };
}
