import React, { useState } from "react";
import { Status } from "../../state/types";
import { useBudgets } from "../../state/budgets/hooks";
import "./welcome-page.css";
import { ButtonPrimary } from "../../components/Button";
import BudgetPicker from "./BudgetPicker";
import { LinkOutline } from "../../components/Button/Link";

function WelcomePage() {
  const [isChoosingBudget, setIsChoosingBudget] = useState(false);
  const { status, budgets } = useBudgets();

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
