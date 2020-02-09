import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeGetBudget } from "../../../state/budgets/selectors";
import { getMonthName } from "../../../util/date";

interface Props {
  id: number;
  isCurrent?: boolean;
  onClick: AnyFunction;
}

export default function BudgetButton(props: Props) {
  const { id, isCurrent, onClick } = props;

  const budget = useSelector(makeGetBudget(id));

  if (!budget) return null;

  return (
    <li>
      <Link
        to={`/budget/${id}`}
        className="budget-drawer--button"
        onClick={onClick}
      >
        {getMonthName(budget.month)} {budget.year}{" "}
        {isCurrent && (
          <span className="budget-drawer--button--current-label">current</span>
        )}
      </Link>
    </li>
  );
}
