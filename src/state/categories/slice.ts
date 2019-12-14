import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Budget } from "../../services/types";
import budgetsSlice from "../budgets/slice";

const initialState: Dictionary<string, Budget.CategoryResponse> = {};

export const name = "categories" as const;

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
        ...budget.categories
      };
    }
  }
});

export default groupsSlice;
