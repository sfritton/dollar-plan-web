import React, { useMemo, useCallback } from "react";
import {
  makeGetCategory,
  makeGetActualAmount
} from "../../state/categories/selectors";
import { useSelector, useDispatch } from "react-redux";
import Card, { CardClickable } from "../../components/Card";
import CategoryHeading from "./CategoryHeading";
import CategoryBalance from "./CategoryBalance";
import { getIsEditing } from "../../state/ui/selectors";
import uiSlice from "../../state/ui/slice";

interface Props {
  categoryId: number;
  isIncome?: boolean;
}

function Category(props: Props) {
  const { categoryId, isIncome = false } = props;
  const dispatch = useDispatch();
  const getCategory = useMemo(() => makeGetCategory(categoryId), [categoryId]);
  const getActualAmount = useMemo(() => makeGetActualAmount(categoryId), [
    categoryId
  ]);

  const isEditing = useSelector(getIsEditing);
  const category = useSelector(getCategory);
  const actualAmount = useSelector(getActualAmount);

  const Tag = isEditing ? Card : CardClickable;
  const handleClick = useCallback(
    () =>
      dispatch(
        uiSlice.actions.openTransactionDrawer({ id: categoryId, isIncome })
      ),
    [dispatch, categoryId, isIncome]
  );

  if (!category) return null;

  return (
    <Tag onClick={handleClick}>
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
    </Tag>
  );
}

export default Category;
