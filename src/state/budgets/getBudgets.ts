import GetBudgets from "../../services/GetBudgets";
import slice from "./slice";
import arrayToMap from "../../util/arrayToMap";
import { AppThunk } from "../types";

function getBudgets(): AppThunk {
  return async dispatch => {
    dispatch(slice.actions.addBudgetsPending());

    try {
      const budgets = await GetBudgets();
      const budgetMap = arrayToMap(
        budgets.map(budget => ({ ...budget, isLoaded: false }))
      );

      dispatch(slice.actions.addBudgetsSuccess(budgetMap));
    } catch (error) {
      dispatch(slice.actions.addBudgetsFailure(error));
    }
  };
}

export default getBudgets;
