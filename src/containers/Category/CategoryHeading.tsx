import React from "react";
import "./category.css";
import { getDollarString } from "../../util/currency";
import Input from "../../components/Input";
import { useSelector } from "react-redux";
import { getIsAdjustingBudget } from "../../state/ui/selectors";

interface Props {
  title: string;
  amount: number;
}

const CategoryHeading = ({ title, amount }: Props) => {
  const isAdjustingBudget = useSelector(getIsAdjustingBudget);

  return (
    <div className="category-card--heading">
      <div className="category-card--title">
        {isAdjustingBudget ? (
          <Input
            className="category-card--title--input"
            placeholder="Category name"
            value={title}
            onChange={() => {}}
          />
        ) : (
          title
        )}
      </div>
      <div>
        {isAdjustingBudget ? (
          <Input
            className="category-card--amount--input"
            value={getDollarString(amount)}
            onChange={() => {}}
          />
        ) : (
          `$${getDollarString(amount)}`
        )}
      </div>
    </div>
  );
};

export default CategoryHeading;
