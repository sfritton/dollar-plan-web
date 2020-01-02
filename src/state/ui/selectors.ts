import { AppState } from "../types";

export const getIsEditing = (state: AppState) => state.ui.isEditing;

export const getIsTransactionDrawerOpen = (state: AppState) =>
  state.ui.transactionDrawer.isOpen;

export const getIsTransactionDrawerIncome = (state: AppState) =>
  state.ui.transactionDrawer.isIncome;

export const getTransactionDrawerId = (state: AppState) =>
  state.ui.transactionDrawer.id;
