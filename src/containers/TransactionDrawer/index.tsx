import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../state/hooks";
import { getIsTransactionDrawerOpen } from "../../state/ui/selectors";
import Drawer from "../../components/Drawer";
import Footer from "./Footer";
import uiSlice from "../../state/ui/slice";
import TransactionInput from "./TransactionInput";
import "./transaction-drawer.css";
import { ButtonSecondary } from "../../components/Button";

function TransactionDrawer() {
  const isOpen = useSelector(getIsTransactionDrawerOpen);
  const closeDrawer = useAction(uiSlice.actions.closeTransactionDrawer);
  const [transactions, setTransactions] = useState([0]);
  const addTransaction = useCallback(
    () =>
      setTransactions(prevTransactions => [
        ...prevTransactions,
        prevTransactions[-1] + 1
      ]),
    [setTransactions]
  );

  const removeTransaction = useCallback(
    (id: number) =>
      setTransactions(prevTransactions =>
        prevTransactions.filter(transaction => transaction !== id)
      ),
    [setTransactions]
  );

  return (
    <Drawer
      title="Add transactions"
      isOpen={isOpen}
      onClose={closeDrawer}
      Footer={Footer}
    >
      {transactions.map(transaction => (
        <TransactionInput key={transaction} />
      ))}
      <ButtonSecondary onClick={addTransaction}>Add another</ButtonSecondary>
    </Drawer>
  );
}

export default TransactionDrawer;
