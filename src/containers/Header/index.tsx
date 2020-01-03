import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeGetBudget } from "../../state/budgets/selectors";
import { getMonthName } from "../../util/date";
import SubHeader from "./SubHeader";
import "./header.css";
import IconAdjust from "../../icons/IconAdjust";
import { ButtonWithIcon } from "../../components/Button";
import BudgetDrawer from "./BudgetDrawer";
import uiSlice from "../../state/ui/slice";
import { getIsAdjustingBudget } from "../../state/ui/selectors";
import IconClose from "../../icons/IconClose";
import IconSave from "../../icons/IconSave";

interface Props {
  budgetId: string;
}

function Header(props: Props) {
  const { budgetId } = props;
  const getBudget = useMemo(() => makeGetBudget(budgetId), [budgetId]);

  const dispatch = useDispatch();
  const budget = useSelector(getBudget);
  const isAdjustingBudget = useSelector(getIsAdjustingBudget);

  return (
    <>
      <div className="header">
        {budget && (
          <>
            {isAdjustingBudget ? (
              <ButtonWithIcon
                className="header--left-btn"
                Icon={IconClose}
                label="Cancel"
                onClick={() => {}}
              />
            ) : (
              <BudgetDrawer budgetId={budgetId} />
            )}
            <h1 className="header--title">
              {getMonthName(budget.month)} {budget.year}
            </h1>
            {isAdjustingBudget ? (
              <ButtonWithIcon
                Icon={IconSave}
                label="Save changes"
                onClick={() => {}}
              />
            ) : (
              <ButtonWithIcon
                Icon={IconAdjust}
                label="Adjust budget"
                onClick={() =>
                  dispatch(uiSlice.actions.setIsAdjustingBudget(true))
                }
              />
            )}
          </>
        )}
      </div>
      <SubHeader budget={budget} />
    </>
  );
}

export default Header;
