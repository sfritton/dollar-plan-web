import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

function BudgetPage() {
  const { budgetId } = useParams();

  if (!budgetId) return null; // TODO: better error state

  return <Header budgetId={budgetId} />;
}

export default BudgetPage;
