import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransactionDrawerState {
  isOpen: boolean;
  id?: number;
  isIncome?: boolean;
}

interface UiState {
  isEditing: boolean;
  transactionDrawer: TransactionDrawerState;
}

const initialState: UiState = {
  isEditing: false,
  transactionDrawer: { isOpen: false }
};
export const name = "ui" as const;

const uiSlice = createSlice({
  name,
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isEditing: action.payload
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
      transactionDrawer: { isOpen: false }
    })
  }
});

export default uiSlice;
