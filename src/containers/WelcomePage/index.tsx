import React, { useEffect } from "react";
import { connect } from "react-redux";
import getBudgetsAction from "../../state/budgets/getBudgets";
import {
  MappedDispatchProps,
  AppState,
  MappedStateProps,
  Status
} from "../../state/types";
import { getHasBudgets, getBudgetStatus } from "../../state/budgets/selectors";
import "./welcome-page.css";
import { ButtonPrimary, ButtonOutline } from "../../components/Button";

type StateProps = MappedStateProps<typeof mapStateToProps>;
type DispatchProps = MappedDispatchProps<typeof mapDispatchToProps>;

function WelcomePage(props: StateProps & DispatchProps) {
  const { status, getBudgets, hasBudgets } = props;

  useEffect(() => {
    if (status !== Status.INIT) return;

    getBudgets();
  }, [status, getBudgets]);

  return (
    <div className="welcome">
      <h1 className="welcome--title">Dollar Plan</h1>
      {status === Status.SUCCESS && (
        <div className="welcome--fade-in">
          {hasBudgets && (
            <>
              <ButtonPrimary className="welcome--wide-btn" onClick={() => {}}>
                Choose a budget
              </ButtonPrimary>
              <div>or</div>
            </>
          )}
          <ButtonOutline className="welcome--wide-btn" onClick={() => {}}>
            Create a new {hasBudgets ? "one" : "budget"}
          </ButtonOutline>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  status: getBudgetStatus(state),
  hasBudgets: getHasBudgets(state)
});

const mapDispatchToProps = {
  getBudgets: getBudgetsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);