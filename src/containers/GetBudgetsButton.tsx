import React from "react";
import { connect } from "react-redux";
import getBudgetsAction from "../state/budgets/getBudgets";

function GetBudgetsButton({ getBudgets }: { getBudgets: () => void }) {
  return <button onClick={getBudgets}>Get budgets</button>;
}

const mapDispatchToProps = {
  getBudgets: getBudgetsAction
};

export default connect(null, mapDispatchToProps)(GetBudgetsButton);
