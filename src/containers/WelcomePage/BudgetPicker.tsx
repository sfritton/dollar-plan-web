import React, { useState } from "react";
import { connect } from "react-redux";
import { getBudgets } from "../../state/budgets/selectors";
import { AppState, MappedStateProps } from "../../state/types";
import { ButtonOutline } from "../../components/Button";
import { getMonthName } from "../../util/date";
import Input from "../../components/Input";
import "./budget-picker.css";

const matchesSearchTerm = (name: string, searchTerm: string) => {
  if (searchTerm === "") return true;

  const searchRegex = new RegExp(searchTerm);

  return searchRegex.test(name.toLowerCase());
};

type StateProps = MappedStateProps<typeof mapStateToProps>;

function BudgetPicker(props: StateProps) {
  const { budgets } = props;
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
            <ButtonOutline
              key={id}
              className="budget-picker--budget-btn"
              onClick={() => {}}
            >
              {name}
            </ButtonOutline>
          ];
        }, [])}
      </div>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  budgets: getBudgets(state)
});

export default connect(mapStateToProps)(BudgetPicker);
