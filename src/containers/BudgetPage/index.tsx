import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { Status } from "../../state/types";
import fetchBudget from "../../state/budgets/fetchBudget";
import { makeGetBudget } from "../../state/budgets/selectors";
import "./budget-page.css";
import Layout from "../../components/Layout";
import BudgetPageContent from "./BudgetPageContent";

function BudgetPage() {
  const { budgetId } = useParams();
  const getBudget = useMemo(() => makeGetBudget(budgetId || ''), [budgetId])

  const budget = useSelector(getBudget);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!budget || budget.status === Status.INIT) {
      dispatch(fetchBudget(budgetId || ''))
    }
  }, [budget, dispatch, budgetId])

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
