import { AppState } from "../types";
import { createSelector } from "@reduxjs/toolkit";
import { makeGetTransaction } from "../transactions/selectors";

export const makeGetCategory = (id: number) => (state: AppState) =>
  state.categories[id];

export const makeSelectActualAmount = (id: number) =>
  createSelector(
    makeGetCategory(id),
    state => state,
    (category, state) => {
      if (!category) return 0;

      const transactions = category.transactionIds.map(id =>
        makeGetTransaction(id)(state)
      );

      return transactions.reduce(
        (sum, transaction) => sum + (transaction ? transaction.amount : 0),
        0
      );
    }
  );
