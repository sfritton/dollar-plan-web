import { Action } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Status, AppState, AppThunk } from "./types";

function useCache<T>(
  statusSelector: (state: AppState) => Status,
  dataSelector: (state: AppState) => T,
  dataFetcher: AnyFunction<Action<string>> | (() => AppThunk)
) {
  const status = useSelector(statusSelector);
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  // fetch the data if it hasn't been fetched already
  useEffect(() => {
    if (status === Status.INIT) dispatch(dataFetcher());
  }, [status, dispatch, dataFetcher]);

  return { status, data };
}

export default useCache;
