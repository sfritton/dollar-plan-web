import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../types";
import { BudgetWithMetadata } from "./slice";

export const getBudgetStatus = (state: AppState) => state.budgets.status;

export const getBudgets = (state: AppState) =>
  Object.values(state.budgets.data).reduce(
    (acc: BudgetWithMetadata[], budget) => {
      if (!budget) return acc;

      return [...acc, budget];
    },
    []
  );

export const getBudgetById = (budgetId: string) => (state: AppState) =>
  state.budgets.data[budgetId];

export const selectHasBudgets = createSelector(
  getBudgets,
  budgets => budgets.length > 0
);
