import React from "react";
import { getBudgetById } from "../../state/budgets/selectors";
import { useSelector } from "react-redux";
import { useBudgets } from "../../state/budgets/hooks";
import { getMonthName } from "../../util/date";
import SubHeader from "./SubHeader";
import "./header.css";

interface Props {
  budgetId: string;
}

function Header(props: Props) {
  const { budgetId } = props;

  useBudgets(); // make sure the budgets slice is populated

  const budget = useSelector(getBudgetById(budgetId));

  if (!budget) return null; // TODO: handle loading

  return (
    <>
      <div className="header">
        <h1 className="header--title">
          {getMonthName(budget.month)} {budget.year}
        </h1>
      </div>
      <SubHeader budgetId={budgetId} />
    </>
  );
}

export default Header;
