import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../types";

export const getBudgetStatus = (state: AppState) => state.budgets.status;

export const getBudgets = (state: AppState) =>
  Object.values(state.budgets.data);

export const selectHasBudgets = createSelector(
  getBudgets,
  budgets => budgets.length > 0
);
