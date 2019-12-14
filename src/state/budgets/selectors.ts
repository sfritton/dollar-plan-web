import { useMemo, useCallback } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../types";
import { BudgetWithMetadata } from "./slice";
import useCache from "../useCache";
import fetchBudgets from "./fetchBudgets";
import fetchBudget from "./fetchBudget";

const getStatus = (state: AppState) => state.budgets.status;

const makeGetBudgetStatus = (id: string) => (state: AppState) =>
  (state.budgets.idMap[id] || {}).status;

const getHasBudgets = (state: AppState) => state.budgets.ids.length > 0;

const makeGetBudget = (budgetId: number | string) => (state: AppState) =>
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
  const getBudgetById = useMemo(() => makeGetBudget(id), [id]);
  const getBudgetStatusById = useMemo(() => makeGetBudgetStatus(id), [id]);
  const fetchBudgetById = useCallback(() => fetchBudget(id), [id]);
  const { status, data } = useCache(
    getBudgetStatusById,
    getBudgetById,
    fetchBudgetById
  );

  return { status, budget: data };
}
