import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isEditing: false };
export const name = "ui" as const;

const uiSlice = createSlice({
  name,
  initialState,
  reducers: {
    setEditing: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isEditing: action.payload
    })
  }
});

export default uiSlice;
