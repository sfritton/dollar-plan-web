import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { useBudget } from "../../state/budgets/selectors";
import Group from "../Group";
import "./budget-page.css";
import Layout from "../../components/Layout";

function BudgetPage() {
  const { budgetId } = useParams();
  const { budget } = useBudget(budgetId || "");

  if (!budgetId) return null; // TODO: better error state

  return (
    <Layout.Grid>
      <Layout.Header>
        <Header budgetId={budgetId} />
      </Layout.Header>
      <Layout.Content>
        <div className="budget-page">
          {budget &&
            budget.groupIds &&
            budget.groupIds.map(id => <Group groupId={id} key={id} />)}
        </div>
      </Layout.Content>
    </Layout.Grid>
  );
}

export default BudgetPage;
