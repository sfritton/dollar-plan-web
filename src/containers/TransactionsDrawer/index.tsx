import React from "react";
import { useSelector } from "react-redux";
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
import { useAction } from "../../state/hooks";

function TransactionDrawer() {
  const isOpen = useSelector(getIsTransactionDrawerOpen);
  const isIncome = useSelector(getIsTransactionDrawerIncome);
  const categoryId = useSelector(getTransactionDrawerId);
  const category = useSelector(makeGetCategory(categoryId || 0));
  const actualAmount = useSelector(makeGetActualAmount(categoryId || 0));

  const closeDrawer = useAction(uiSlice.actions.closeTransactionDrawer);

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
            <>
              <h3 className="transaction-drawer--heading">Notes</h3>
              <div className="category-card--notes">{category.notes}</div>
            </>
          )}
          <h3 className="transaction-drawer--heading">Transactions</h3>
          <ul className="transaction-drawer--transactions">
            {transactionIds &&
              transactionIds.map(id => <Transaction id={id} key={id} />)}
          </ul>
        </>
      )}
    </Drawer>
  );
}

export default TransactionDrawer;
