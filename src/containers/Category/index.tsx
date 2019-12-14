import React, { useMemo } from "react";
import {
  makeGetCategory,
  makeSelectActualAmount
} from "../../state/categories/selectors";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import ProgressBar from "../../components/ProgressBar";
import CategoryHeading from "./CategoryHeading";

interface Props {
  categoryId: number;
}

function Category(props: Props) {
  const { categoryId } = props;
  const getCategory = useMemo(() => makeGetCategory(categoryId), [categoryId]);
  const selectActualAmount = useMemo(() => makeSelectActualAmount(categoryId), [
    categoryId
  ]);

  const category = useSelector(getCategory);
  const actualAmount = useSelector(selectActualAmount);

  if (!category) return null;

  return (
    <Card>
      <CategoryHeading
        title={category.title}
        amount={category.planned_amount}
      />
      <ProgressBar
        numerator={actualAmount}
        denominator={category.planned_amount}
        // danger={!income}
      />
    </Card>
  );
}

export default Category;
