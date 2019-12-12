import React from "react";
import { getBudgetById } from "../../state/budgets/selectors";
import { useSelector } from "react-redux";
import classNames from "../../util/classNames";
import { hasMonthStarted, hasMonthEnded, getDaysLeft } from "../../util/date";
import { BudgetWithMetadata } from "../../state/budgets/slice";

const getDaysLeftMessage = (budget: BudgetWithMetadata) => {
  const date = { month: budget.month, year: budget.year };
  if (!hasMonthStarted(date)) {
    return "Month has not started";
  }

  if (hasMonthEnded(date)) {
    return "Month has ended";
  }

  return `${getDaysLeft(date)} days left`;
};

interface Props {
  budgetId: string;
}

function SubHeader(props: Props) {
  const { budgetId } = props;

  const budget = useSelector(getBudgetById(budgetId));
  const unbalanced = false;

  if (!budget) return null; // TODO: handle loading

  return (
    <div
      className={classNames(
        { "header--subheader--unbalanced": unbalanced },
        "header--subheader"
      )}
    >
      {unbalanced ? (
        <span>Budget is unbalanced</span>
      ) : (
        <>
          <span>Balance: -$10,000</span>
          <span>{getDaysLeftMessage(budget)}</span>
        </>
      )}
    </div>
  );
}

export default SubHeader;
