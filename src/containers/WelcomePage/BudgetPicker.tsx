import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Status } from "../../state/types";
import { selectBudgets, getStatus } from "../../state/budgets/selectors";
import fetchBudgets from "../../state/budgets/fetchBudgets";
import { getMonthName } from "../../util/date";
import Input from "../../components/Input";
import "./budget-picker.css";
import { LinkOutline } from "../../components/Button/Link";

const matchesSearchTerm = (name: string, searchTerm: string) => {
  if (searchTerm === "") return true;

  const searchRegex = new RegExp(searchTerm);

  return searchRegex.test(name.toLowerCase());
};

function BudgetPicker() {
  const status = useSelector(getStatus);
  const budgets = useSelector(selectBudgets);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (status === Status.INIT) {
      dispatch(fetchBudgets());
    }
  }, [status, dispatch]);

  return (
    <>
      <h2 className="budget-picker--heading">Choose a budget</h2>
      <Input
        className="budget-picker--typeahead"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Filter"
      />
      <div className="budget-picker--budgets-container">
        {budgets.reduce((acc: JSX.Element[], { id, month, year }) => {
          const name = `${getMonthName(month)} ${year}`;
          const matches = matchesSearchTerm(name, searchTerm);

          if (!matches) return acc;

          return [
            ...acc,
            <LinkOutline
              key={id}
              className="budget-picker--budget-btn"
              to={`/budget/${id}`}
            >
              {name}
            </LinkOutline>
          ];
        }, [])}
      </div>
    </>
  );
}

export default BudgetPicker;
