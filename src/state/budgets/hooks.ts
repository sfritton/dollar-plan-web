import { Action } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Status, AppState, AppThunk } from "../types";
import { getBudgetStatus, getBudgets } from "./selectors";
import fetchBudgets from "./fetchBudgets";

function useCache<T>(
  statusSelector: (state: AppState) => Status,
  dataSelector: (state: AppState) => T,
  dataFetcher: AnyFunction<Action<string>> | (() => AppThunk)
) {
  const status = useSelector(statusSelector);
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.INIT) dispatch(dataFetcher());
  }, [status, dispatch, dataFetcher]);

  return { status, data };
}

export function useBudgets() {
  const { status, data } = useCache(getBudgetStatus, getBudgets, fetchBudgets);

  return { status, budgets: data };
}
