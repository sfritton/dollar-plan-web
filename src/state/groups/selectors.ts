import { AppState } from "../types";

export const makeGetGroup = (id: number) => (state: AppState) =>
  state.groups[id];
