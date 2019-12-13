import React, { useState } from "react";
import { getMonthName } from "../../util/date";
import Input from "../../components/Input";
import "./budget-picker.css";
import { LinkOutline } from "../../components/Button/Link";
import { useBudgets } from "../../state/budgets/selectors";

const matchesSearchTerm = (name: string, searchTerm: string) => {
  if (searchTerm === "") return true;

  const searchRegex = new RegExp(searchTerm);

  return searchRegex.test(name.toLowerCase());
};

function BudgetPicker() {
  const { budgets } = useBudgets();
  const [searchTerm, setSearchTerm] = useState("");

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
