import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStatus, selectBudgets } from "../../state/budgets/selectors";
import IconCalendar from "../../icons/IconCalendar";
import { ButtonWithIcon } from "../../components/Button";
import Drawer from "../../components/Drawer";
import fetchBudgets from "../../state/budgets/fetchBudgets";
import { Status } from "../../state/types";

interface Props {
  budgetId: string;
}

function BudgetDrawer(props: Props) {
  const { budgetId } = props;

  const budgets = useSelector(selectBudgets);
  const status = useSelector(getStatus);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.INIT) {
      dispatch(fetchBudgets());
    }
  }, [status, dispatch]);

  return (
    <>
      <ButtonWithIcon
        Icon={IconCalendar}
        label="Switch budget"
        onClick={() => setIsOpen(true)}
        className="header--left-btn"
      />
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side="left"
        title="Choose a budget"
      >
        <ul>
          {budgets.map(b =>
            b ? (
              <li key={b.id}>
                {b.month} {b.year}{" "}
                {budgetId === String(b.id) ? "- selected" : ""}
              </li>
            ) : null
          )}
        </ul>
      </Drawer>
    </>
  );
}

export default BudgetDrawer;
