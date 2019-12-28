import { AppState } from "../types";
import { makeGetActualAmount as makeGetCategoryActualAmount } from "../categories/selectors";

export const makeGetGroup = (id: number) => (state: AppState) =>
  state.groups[id];

export const makeGetActualAmount = (id: number) => (state: AppState) => {
  const group = makeGetGroup(id)(state);

  if (!group) return 0;

  return group.categoryIds.reduce(
    (sum, categoryId) => sum + makeGetCategoryActualAmount(categoryId)(state),
    0
  );
};
