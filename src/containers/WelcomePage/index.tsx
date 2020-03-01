import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Status } from "../../state/types";
import { getStatus, selectBudgets } from "../../state/budgets/selectors";
import fetchBudgetsAction from "../../state/budgets/fetchBudgets";
import "./welcome-page.css";
import { LinkOutline, LinkPrimary } from "../../components/Button/Link";
import { useAction } from "../../state/hooks";

function WelcomePage() {
  const status = useSelector(getStatus);
  const budgets = useSelector(selectBudgets);

  const fetchBudgets = useAction(fetchBudgetsAction);

  useEffect(() => {
    if (status === Status.INIT) {
      fetchBudgets();
    }
  }, [status, fetchBudgets]);

  const hasBudgets = budgets.length > 0;

  return (
    <div className="welcome">
      <h1 className="welcome--title">Dollar Plan</h1>
      {status === Status.SUCCESS && (
        <div className="welcome--fade-in">
          {hasBudgets && (
            <>
              <LinkPrimary className="welcome--wide-btn" to="/choose-budget">
                Choose a budget
              </LinkPrimary>
              <div>or</div>
            </>
          )}
          <LinkOutline className="welcome--wide-btn" to="/new-budget">
            Create a new {hasBudgets ? "one" : "budget"}
          </LinkOutline>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
