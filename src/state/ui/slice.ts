import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransactionDrawerState {
  isOpen: boolean;
  id?: number;
  isIncome?: boolean;
}

interface UiState {
  isAdjustingBudget: boolean;
  isEditingTransactions: boolean;
  transactionDrawer: TransactionDrawerState;
}

const initialState: UiState = {
  isAdjustingBudget: false,
  isEditingTransactions: false,
  transactionDrawer: { isOpen: false }
};
export const name = "ui" as const;

const uiSlice = createSlice({
  name,
  initialState,
  reducers: {
    setIsAdjustingBudget: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isAdjustingBudget: action.payload
    }),
    setIsEditingTransactions: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isEditingTransactions: action.payload
    }),
    openTransactionDrawer: (
      state,
      action: PayloadAction<Omit<TransactionDrawerState, "isOpen">>
    ) => ({
      ...state,
      transactionDrawer: { ...action.payload, isOpen: true }
    }),

    closeTransactionDrawer: state => ({
      ...state,
      isEditingTransactions: false,
      transactionDrawer: { isOpen: false }
    })
  }
});

export default uiSlice;
