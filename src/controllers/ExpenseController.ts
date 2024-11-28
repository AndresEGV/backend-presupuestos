import type { Request, Response } from "express";
import Expense from "../models/Expense";

export class ExpensesController {
  static getAll = async (req: Request, res: Response) => {};

  static create = async (req: Request, res: Response) => {
    try {
      const expense = new Expense(req.body);
      expense.bugdgetId = req.budget.id;
      await expense.save();
      res.status(201).json("Gasto agregado correctamente");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Hubo un error" });
    }
  };

  static getById = async (req: Request, res: Response) => {
    res.json(req.expense);
  };

  static updateById = async (req: Request, res: Response) => {};

  static deleteById = async (req: Request, res: Response) => {};
}
