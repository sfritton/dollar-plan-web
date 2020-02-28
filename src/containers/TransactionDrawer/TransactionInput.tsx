import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeGetBudget } from "../../state/budgets/selectors";
import {
  getMonthNameShort,
  getLastDayOfMonth,
  getClosestToToday
} from "../../util/date";
import { Select, InputText, InputCent } from "../../components/Input";
import CategorySelect from "./CategorySelect";

const dates = [...new Array(31)].map((_, index) => index + 1);

const TransactionInput: React.FC = () => {
  const { budgetId } = useParams();
  const budget = useSelector(makeGetBudget(Number(budgetId)));

  if (!budget) return null;

  const { month, year } = budget;
  const monthName = getMonthNameShort(month || 0);
  const lastDay = getLastDayOfMonth({ month, year }).getDate();
  const closestDate = getClosestToToday({ month, year }).getDate();

  return (
    <div className="transaction-drawer--input-card">
      <div className="transaction-drawer--input-card--row-1">
        <Select
          label="Date"
          defaultValue={closestDate}
          className="transaction-drawer--date-input"
        >
          {dates.slice(0, lastDay).map(date => (
            <option key={date} value={date}>
              {monthName} {date}
            </option>
          ))}
        </Select>
        <InputCent
          label="Amount"
          className="transaction-drawer--amount-input"
        />
      </div>
      <CategorySelect />
      <InputText
        label="Description"
        className="transaction-drawer--description-input"
      />
    </div>
  );
};

export default TransactionInput;
