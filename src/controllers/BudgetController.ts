import type { Request, Response } from "express";

export class BudgetController {
  static getAll = async (req: Request, res: Response) => {
    console.log("budget");
  };
  static create = async (req: Request, res: Response) => {
    console.log("budget");
  };

  static getById = async (req: Request, res: Response) => {
    console.log("budget");
  };
}
