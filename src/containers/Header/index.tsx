import React from "react";
import { useBudget } from "../../state/budgets/selectors";
import { getMonthName } from "../../util/date";
import SubHeader from "./SubHeader";
import "./header.css";
import IconCalendar from "../../icons/IconCalendar";
import IconAdjust from "../../icons/IconAdjust";

interface Props {
  budgetId: string;
}

function Header(props: Props) {
  const { budgetId } = props;

  const { budget } = useBudget(budgetId);

  return (
    <>
      <div className="header">
        {budget && (
          <>
            <IconCalendar
              size={32}
              className="header--icon header--icon--left"
            />
            <h1 className="header--title">
              {getMonthName(budget.month)} {budget.year}
            </h1>
            <IconAdjust size={32} className="header--icon" />
          </>
        )}
      </div>
      <SubHeader budget={budget} />
    </>
  );
}

export default Header;
