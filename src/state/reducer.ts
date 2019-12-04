import { combineReducers } from "@reduxjs/toolkit";
import uiSlice, { name as uiName } from "./ui/slice";
import budgetsSlice, { name as budgetsName } from "./budgets/slice";

export default combineReducers({
  [uiName]: uiSlice.reducer,
  [budgetsName]: budgetsSlice.reducer
});
