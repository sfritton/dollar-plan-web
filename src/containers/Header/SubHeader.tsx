import React from "react";
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
  budget?: BudgetWithMetadata;
}

function SubHeader(props: Props) {
  const { budget } = props;

  const unbalanced = false;

  if (!budget) return <div className="header--subheader" />;

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
