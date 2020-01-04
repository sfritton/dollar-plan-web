import React, { useCallback } from "react";
import {
  makeGetCategory,
  makeGetActualAmount
} from "../../state/categories/selectors";
import { useSelector } from "react-redux";
import Card, { CardClickable } from "../../components/Card";
import CategoryHeading from "./CategoryHeading";
import CategoryBalance from "./CategoryBalance";
import CategoryNotes from "./CategoryNotes";
import { getIsAdjustingBudget } from "../../state/ui/selectors";
import uiSlice from "../../state/ui/slice";
import { useAction } from "../../state/hooks";

interface Props {
  categoryId: number;
  isIncome?: boolean;
}

function Category(props: Props) {
  const { categoryId, isIncome = false } = props;

  const isAdjustingBudget = useSelector(getIsAdjustingBudget);
  const category = useSelector(makeGetCategory(categoryId));
  const actualAmount = useSelector(makeGetActualAmount(categoryId));

  const Tag = isAdjustingBudget ? Card : CardClickable;

  const openTransactionDrawer = useAction(
    uiSlice.actions.openTransactionDrawer
  );
  const handleClick = useCallback(
    () => openTransactionDrawer({ id: categoryId, isIncome }),
    [openTransactionDrawer, categoryId, isIncome]
  );

  if (!category) return null;

  const { title, planned_amount, notes } = category;

  return (
    <Tag onClick={handleClick}>
      <CategoryHeading title={title} amount={planned_amount} />
      <CategoryBalance
        plannedAmount={planned_amount}
        actualAmount={actualAmount}
        isIncome={isIncome}
      />
      <CategoryNotes notes={notes} />
    </Tag>
  );
}

export default Category;
