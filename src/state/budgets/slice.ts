import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "../../services/types";
import { AsyncState, Status } from "../types";

export interface BudgetLoaded extends Budget.Budget {
  error?: string;
  status: Status.SUCCESS;
  incomeIds: number[];
  expenseIds: number[];
}

export interface BudgetUnloaded extends Budget.Budget {
  error?: string;
  status: Status.INIT | Status.LOADING | Status.FAILURE;
}

export type BudgetWithMetadata = BudgetLoaded | BudgetUnloaded;

interface BudgetState extends AsyncState {
  ids: number[];
  idMap: Dictionary<string, BudgetWithMetadata>;
}

const initialState: BudgetState = { status: Status.INIT, ids: [], idMap: {} };

export const name = "budgets" as const;

const budgetsSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBudgetsPending: state => ({
      ...state,
      status: Status.LOADING
    }),
    addBudgetsSuccess: (
      state,
      action: PayloadAction<{
        ids: number[];
        idMap: Record<string, BudgetWithMetadata>;
      }>
    ) => {
      const { ids, idMap } = action.payload;

      ids.forEach(id => {
        if (state.idMap[id]) return;

        state.idMap[id] = idMap[id];
      });

      state.ids = ids;
      state.status = Status.SUCCESS;
    },
    addBudgetsFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
      status: Status.FAILURE
    }),
    addBudgetPending: (state, action: PayloadAction<string>) => {
      const budget = state.idMap[action.payload];

      if (!budget) return;

      state.idMap[action.payload] = {
        ...budget,
        status: Status.LOADING
      };
    },
    addBudgetSuccess: (
      state,
      action: PayloadAction<{
        id: string;
        budget: Budget.BudgetResponse;
      }>
    ) => {
      const { budget, id } = action.payload;
      const { month, year, incomeIds, expenseIds } = budget;

      state.idMap[id] = {
        month,
        year,
        id: budget.id,
        incomeIds,
        expenseIds,
        status: Status.SUCCESS
      };
    },
    addBudgetFailure: (
      state,
      action: PayloadAction<{ id: string; error: string }>
    ) => {
      const { id, error } = action.payload;
      const budget = state.idMap[id];

      if (!budget) return;

      state.idMap[action.payload.id] = {
        ...budget,
        status: Status.FAILURE,
        error
      };
    }
  }
});

export default budgetsSlice;
