import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../types";
import { BudgetWithMetadata } from "./slice";
import useCache from "../useCache";
import fetchBudgets from "./fetchBudgets";
import { useMemo } from "react";

const getStatus = (state: AppState) => state.budgets.status;

const getHasBudgets = (state: AppState) => state.budgets.ids.length > 0;

const makeGetBudgetById = (budgetId: number | string) => (state: AppState) =>
  state.budgets.idMap[budgetId];

const selectBudgets = createSelector(
  (state: AppState) => state.budgets.ids,
  (state: AppState) => state.budgets.idMap,
  (ids, idMap) =>
    ids.reduce((acc: BudgetWithMetadata[], id) => {
      const budget = idMap[id];
      if (!budget) return acc;

      return [...acc, budget];
    }, [])
);

export function useHasBudgets() {
  const { status, data } = useCache(getStatus, getHasBudgets, fetchBudgets);

  return { status, hasBudgets: data };
}

export function useBudgets() {
  const { status, data } = useCache(getStatus, selectBudgets, fetchBudgets);

  return { status, budgets: data };
}

export function useBudget(id: string) {
  const getBudgetById = useMemo(() => makeGetBudgetById(id), [id]);
  const { status, data } = useCache(getStatus, getBudgetById, fetchBudgets);

  return { status, budget: data };
}
