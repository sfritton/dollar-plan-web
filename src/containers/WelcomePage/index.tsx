import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Status } from "../../state/types";
import { getStatus, selectBudgets } from "../../state/budgets/selectors";
import fetchBudgets from "../../state/budgets/fetchBudgets";
import "./welcome-page.css";
import { ButtonPrimary } from "../../components/Button";
import BudgetPicker from "./BudgetPicker";
import { LinkOutline } from "../../components/Button/Link";

function WelcomePage() {
  const [isChoosingBudget, setIsChoosingBudget] = useState(false);
  const status = useSelector(getStatus);
  const budgets = useSelector(selectBudgets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.INIT) {
      dispatch(fetchBudgets());
    }
  }, [status, dispatch])

  const hasBudgets = budgets.length > 0;

  return (
    <div className="welcome">
      <h1 className="welcome--title">Dollar Plan</h1>
      {isChoosingBudget ? (
        <BudgetPicker />
      ) : (
        status === Status.SUCCESS && (
          <div className="welcome--fade-in">
            {hasBudgets && (
              <>
                <ButtonPrimary
                  className="welcome--wide-btn"
                  onClick={() => setIsChoosingBudget(true)}
                >
                  Choose a budget
                </ButtonPrimary>
                <div>or</div>
              </>
            )}
            <LinkOutline className="welcome--wide-btn" to="/new-budget">
              Create a new {hasBudgets ? "one" : "budget"}
            </LinkOutline>
          </div>
        )
      )}
    </div>
  );
}

export default WelcomePage;
