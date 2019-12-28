import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeGetBudget } from "../../state/budgets/selectors";
import { getMonthName } from "../../util/date";
import SubHeader from "./SubHeader";
import "./header.css";
import IconCalendar from "../../icons/IconCalendar";
import IconAdjust from "../../icons/IconAdjust";
import { ButtonWithIcon } from "../../components/Button";

interface Props {
  budgetId: string;
}

function Header(props: Props) {
  const { budgetId } = props;
  const getBudget = useMemo(() => makeGetBudget(budgetId), [budgetId]);

  const budget = useSelector(getBudget);

  return (
    <>
      <div className="header">
        {budget && (
          <>
            <ButtonWithIcon
              Icon={IconCalendar}
              label="Switch budget"
              onClick={() => {}}
              className="header--left-btn"
            />
            <h1 className="header--title">
              {getMonthName(budget.month)} {budget.year}
            </h1>
            <ButtonWithIcon
              Icon={IconAdjust}
              label="Adjust budet"
              onClick={() => {}}
            />
          </>
        )}
      </div>
      <SubHeader budget={budget} />
    </>
  );
}

export default Header;
