import { AppState } from "../types";

export const getIsAdjustingBudget = (state: AppState) =>
  state.ui.isAdjustingBudget;

export const getIsEditingTransactions = (state: AppState) =>
  state.ui.isEditingTransactions;

export const getIsTransactionDrawerOpen = (state: AppState) =>
  state.ui.transactionDrawer.isOpen;

export const getIsTransactionDrawerIncome = (state: AppState) =>
  state.ui.transactionDrawer.isIncome;

export const getTransactionDrawerId = (state: AppState) =>
  state.ui.transactionDrawer.id;
