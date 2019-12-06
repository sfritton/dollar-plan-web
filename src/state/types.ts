import store from "./store";
import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;

export enum Status {
  INIT = "INIT",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE"
}

export interface AsyncState<T> {
  status: Status;
  data: T;
  error?: string;
}

export type MappedStateProps<T extends AnyFunction> = ReturnType<
  T
> extends AnyFunction
  ? ReturnType<ReturnType<T>> // makeMapStateToProps
  : ReturnType<T>; // mapStateToProps

type DispatchThunkAction<T extends AnyFunction<AppThunk>> = (
  ...params: Parameters<T>
) => ReturnType<ReturnType<T>>;

type MappedDispatchPropsObject<T> = {
  [P in keyof T]: T[P] extends AnyFunction<AnyFunction>
    ? DispatchThunkAction<T[P]>
    : T[P];
};

export type MappedDispatchProps<T> = T extends (...args: any[]) => infer R
  ? MappedDispatchPropsObject<R>
  : MappedDispatchPropsObject<T>;
