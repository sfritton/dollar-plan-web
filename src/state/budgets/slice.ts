import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "../../services/types";
import { AsyncState, Status } from "../types";

interface BudgetWithMetadata extends Budget.Budget {
  isLoaded: boolean;
  groupIds?: number[];
}

type BudgetState = AsyncState<Record<string, BudgetWithMetadata>>;

const initialState: BudgetState = { status: Status.INIT, data: {} };

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
      action: PayloadAction<Record<string, BudgetWithMetadata>>
    ) => ({
      ...state,
      data: action.payload,
      status: Status.SUCCESS
    }),
    addBudgetsFailure: (state, action: PayloadAction<Error>) => ({
      ...state,
      error: action.payload,
      status: Status.FAILURE
    })
  }
});

export default budgetsSlice;
