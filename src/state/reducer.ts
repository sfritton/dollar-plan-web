import { combineReducers } from "@reduxjs/toolkit";
import uiSlice, { name } from "./ui/reducer";

export default combineReducers({ [name]: uiSlice.reducer });
