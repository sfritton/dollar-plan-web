import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Status } from "../../state/types";
import { getStatus } from "../../state/budgets/selectors";
import fetchBudgetsAction from "../../state/budgets/fetchBudgets";
import BudgetPicker from "./BudgetPicker";
import { useAction } from "../../state/hooks";
import "./choose-budget.css";

function ChooseBudgetPage() {
  const status = useSelector(getStatus);

  const fetchBudgets = useAction(fetchBudgetsAction);

  useEffect(() => {
    if (status === Status.INIT) {
      fetchBudgets();
    }
  }, [status, fetchBudgets]);

  return (
    <div className="welcome">
      <h1 className="welcome--title welcome--title--no-animation">
        Dollar Plan
      </h1>
      <BudgetPicker />
    </div>
  );
}

export default ChooseBudgetPage;
