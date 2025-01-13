import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { handleInputErrors } from "../middleware/validation";
import {
  hasAccess,
  validateBudgetExists,
  validateBudgetId,
  validateBudgetInput,
} from "../middleware/budget";
import { ExpensesController } from "../controllers/ExpenseController";
import {
  validateExpenseExists,
  validateExpenseId,
  validateExpenseInput,
} from "../middleware/expense";
import { authenticate } from "../middleware/auth";

const router = Router();

router.use(authenticate);

router.param("budgetId", validateBudgetId);
router.param("budgetId", validateBudgetExists);
router.param("budgetId", hasAccess);

router.param("expenseId", validateExpenseId);
router.param("expenseId", validateExpenseExists);

router.get("/", BudgetController.getAll);

router.post(
  "/",
  validateBudgetInput,
  handleInputErrors,
  BudgetController.create
);

router.get("/:budgetId", BudgetController.getById);

router.put("/:budgetId", handleInputErrors, BudgetController.updateById);

router.delete("/:budgetId", BudgetController.deleteById);

/**Routes for expenses (Patrón ROA)*/
router.get("/:budgetId/expenses", ExpensesController.getAll);
router.post(
  "/:budgetId/expenses",
  validateExpenseInput,
  handleInputErrors,
  ExpensesController.create
);
router.get("/:budgetId/expenses/:expenseId", ExpensesController.getById);
router.put(
  "/:budgetId/expenses/:expenseId",
  validateExpenseInput,
  handleInputErrors,
  ExpensesController.updateById
);
router.delete("/:budgetId/expenses/:expenseId", ExpensesController.deleteById);

export default router;
