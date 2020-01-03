import React from "react";
import { useSelector } from "react-redux";
import { makeGetBudget } from "../../../state/budgets/selectors";
import { getMonthName } from "../../../util/date";
import { CardLink } from "../../../components/Card";

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
      <CardLink
        to={`/budget/${id}`}
        className="budget-drawer--button"
        onClick={onClick}
      >
        {getMonthName(budget.month)} {budget.year}{" "}
        {isCurrent && (
          <span className="budget-drawer--button--current-label">current</span>
        )}
      </CardLink>
    </li>
  );
}
