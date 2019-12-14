import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "../../services/types";
import budgetsSlice from "../budgets/slice";

const initialState: Dictionary<string, Budget.GroupResponse> = {};

export const name = "groups" as const;

const groupsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [budgetsSlice.actions.addBudgetSuccess.toString()]: (
      state,
      action: PayloadAction<{
        id: string;
        budget: Budget.BudgetResponse;
      }>
    ) => {
      const { budget } = action.payload;

      return {
        ...state,
        ...budget.groups
      };
    }
  }
});

export default groupsSlice;
