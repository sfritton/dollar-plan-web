import React, { useMemo } from "react";
import classNames from "../../util/classNames";
import { hasMonthStarted, hasMonthEnded, getDaysLeft } from "../../util/date";
import { BudgetWithMetadata } from "../../state/budgets/slice";
import { useSelector } from "react-redux";
import { makeGetActualBalance } from "../../state/budgets/selectors";
import { useParams } from "react-router-dom";
import { getDollarString } from "../../util/currency";

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

const formatBalance = (balance?: number) => {
  if (typeof balance === 'undefined') return '';

  if (balance < 0) {
    return "Balance: -$" + getDollarString(balance * -1);
  }

  return "Balance: $" + getDollarString(balance);
}

interface Props {
  budget?: BudgetWithMetadata;
}

function SubHeader(props: Props) {
  const { budget } = props;
  const { budgetId } = useParams();

  const getActualBalance = useMemo(() => makeGetActualBalance(budgetId || ''), [budgetId])
  const balance = useSelector(getActualBalance);

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
          <span>{formatBalance(balance)}</span>
          <span>{getDaysLeftMessage(budget)}</span>
        </>
      )}
    </div>
  );
}

export default SubHeader;
