import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { editing: false };
export const name = "ui" as const;

const uiSlice = createSlice({
  name,
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => ({
      ...state,
      editing: action.payload
    })
  }
});

export default uiSlice;
