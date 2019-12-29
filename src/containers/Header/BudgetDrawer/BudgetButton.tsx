import React from "react";
import { useSelector } from "react-redux";
import { makeGetBudget } from "../../../state/budgets/selectors";
import { LinkSecondary } from "../../../components/Button/Link";
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
      <LinkSecondary
        to={`/budget/${id}`}
        className="budget-drawer--button"
        onClick={onClick}
      >
        {getMonthName(budget.month)} {budget.year} {isCurrent && "(current)"}
      </LinkSecondary>
    </li>
  );
}
