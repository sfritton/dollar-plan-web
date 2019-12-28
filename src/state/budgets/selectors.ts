import { createSelector } from "@reduxjs/toolkit";
import { AppState, Status } from "../types";
import { BudgetWithMetadata } from "./slice";
import { makeGetActualAmount } from "../groups/selectors";

export const getStatus = (state: AppState) => state.budgets.status;

export const makeGetBudgetStatus = (id: string) => (state: AppState) =>
  (state.budgets.idMap[id] || {}).status;

export const getHasBudgets = (state: AppState) => state.budgets.ids.length > 0;

export const makeGetBudget = (budgetId: number | string) => (state: AppState) =>
  state.budgets.idMap[budgetId];

export const selectBudgets = createSelector(
  (state: AppState) => state.budgets.ids,
  (state: AppState) => state.budgets.idMap,
  (ids, idMap) =>
    ids.reduce((acc: BudgetWithMetadata[], id) => {
      const budget = idMap[id];
      if (!budget) return acc;

      return [...acc, budget];
    }, [])
);

export const makeGetActualBalance = (budgetId: number | string) => (
  state: AppState
) => {
  const budget = makeGetBudget(budgetId)(state);

  if (!budget || budget.status !== Status.SUCCESS) return undefined;

  const totalIncome = budget.incomeIds.reduce(
    (sum, id) => sum + makeGetActualAmount(id)(state),
    0
  );
  const totalExpenses = budget.expenseIds.reduce(
    (sum, id) => sum + makeGetActualAmount(id)(state),
    0
  );

  return totalIncome - totalExpenses;
};
