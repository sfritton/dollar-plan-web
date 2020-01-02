import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsTransactionDrawerOpen,
  getIsTransactionDrawerIncome,
  getTransactionDrawerId
} from "../../state/ui/selectors";
import uiSlice from "../../state/ui/slice";
import Drawer from "../../components/Drawer";
import CategoryBalance from "../Category/CategoryBalance";
import Transaction from "../Transaction";
import {
  makeGetCategory,
  makeGetActualAmount
} from "../../state/categories/selectors";
import Footer from "./Footer";
import "./transaction-drawer.css";

function TransactionDrawer() {
  const isOpen = useSelector(getIsTransactionDrawerOpen);
  const isIncome = useSelector(getIsTransactionDrawerIncome);
  const categoryId = useSelector(getTransactionDrawerId);
  const category = useSelector(makeGetCategory(categoryId || 0));
  const actualAmount = useSelector(makeGetActualAmount(categoryId || 0));

  const dispatch = useDispatch();

  const closeDrawer = useCallback(
    () => dispatch(uiSlice.actions.closeTransactionDrawer()),
    [dispatch]
  );

  const { title, transactionIds } = category || {};

  return (
    <Drawer
      title={title || "Add transactions"}
      isOpen={isOpen && Boolean(category)}
      onClose={closeDrawer}
      Footer={Footer}
    >
      {category && (
        <>
          <CategoryBalance
            plannedAmount={category.planned_amount}
            actualAmount={actualAmount}
            isIncome={isIncome}
          />
          {category.notes && (
            <div className="category-card--notes">{category.notes}</div>
          )}
          <ul className="transaction-drawer--transactions">
            {transactionIds &&
              transactionIds.map(id => <Transaction id={id} />)}
          </ul>
        </>
      )}
    </Drawer>
  );
}

export default TransactionDrawer;
