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
    try {
      const { id } = req.params;
      const budget = await Bugdget.findByPk(id);
      if (!budget) {
        const error = new Error("Presupuesto no encontrado");
        res.status(404).json({ message: error.message });
        return;
      }
      res.json(budget);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Hubo un error" });
    }
  };

  static updateById = async (req: Request, res: Response) => {
    console.log("budget");
  };
  static deleteById = async (req: Request, res: Response) => {
    console.log("budget");
  };
}
