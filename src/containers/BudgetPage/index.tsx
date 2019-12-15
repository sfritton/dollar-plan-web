import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { useBudget } from "../../state/budgets/selectors";
import "./budget-page.css";
import Layout from "../../components/Layout";
import BudgetPageContent from "./BudgetPageContent";

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
        <BudgetPageContent budget={budget} />
      </Layout.Content>
    </Layout.Grid>
  );
}

export default BudgetPage;
