import { AppState } from "../types";

export const getBudgetStatus = (state: AppState) => state.budgets.status;

export const getHasBudgets = (state: AppState) =>
  Object.values(state.budgets.data).length > 0;
