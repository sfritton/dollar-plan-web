import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "../../services/types";
import { AsyncState, Status } from "../types";

export interface BudgetWithMetadata extends Budget.Budget {
  status: Status;
  groupIds?: number[];
}

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
    ) => ({
      ...state,
      ...action.payload,
      status: Status.SUCCESS
    }),
    addBudgetsFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
      status: Status.FAILURE
    })
  }
});

export default budgetsSlice;
