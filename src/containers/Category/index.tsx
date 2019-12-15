import React, { useMemo } from "react";
import {
  makeGetCategory,
  makeGetActualAmount
} from "../../state/categories/selectors";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import CategoryHeading from "./CategoryHeading";
import CategoryBalance from "./CategoryBalance";

interface Props {
  categoryId: number;
  isIncome?: boolean;
}

function Category(props: Props) {
  const { categoryId, isIncome = false } = props;
  const getCategory = useMemo(() => makeGetCategory(categoryId), [categoryId]);
  const getActualAmount = useMemo(() => makeGetActualAmount(categoryId), [
    categoryId
  ]);

  const category = useSelector(getCategory);
  const actualAmount = useSelector(getActualAmount);

  if (!category) return null;

  return (
    <Card>
      <CategoryHeading
        title={category.title}
        amount={category.planned_amount}
      />
      <CategoryBalance
        plannedAmount={category.planned_amount}
        actualAmount={actualAmount}
        isIncome={isIncome}
      />
      {category.notes && (
        <div className="category-card--notes">{category.notes}</div>
      )}
    </Card>
  );
}

export default Category;
