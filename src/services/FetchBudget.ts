import { Budget } from "./types";
import { fetchGet } from "../util/fetch";

async function FetchBudget(id: string) {
  return await fetchGet<Budget.BudgetResponse>(
    `http://localhost:3000/budgets/${id}`
  );
}

export default FetchBudget;
