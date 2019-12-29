import React from "react";
import Group from "../Group";
import "./budget-page.css";
import { BudgetWithMetadata } from "../../state/budgets/slice";
import { Status } from "../../state/types";
import TransactionDrawer from "../TransactionsDrawer";

interface Props {
  budget?: BudgetWithMetadata;
}

function BudgetPageContent(props: Props) {
  const { budget } = props;

  if (!budget || budget.status !== Status.SUCCESS) return null;

  return (
    <div className="budget-page">
      <section>
        <h2>Income</h2>
        {budget.incomeIds.map(id => (
          <Group
            groupId={id}
            key={id}
            noTitle={budget.incomeIds.length === 1}
          />
        ))}
      </section>
      <section>
        <h2>Expenses</h2>
        {budget.expenseIds.map(id => (
          <Group groupId={id} key={id} />
        ))}
      </section>
      <TransactionDrawer />
    </div>
  );
}

export default BudgetPageContent;
