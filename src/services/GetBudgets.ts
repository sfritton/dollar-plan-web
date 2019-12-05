import { Budget } from "./types";
import { fetchGet } from "../util/fetch";

async function GetBudgets() {
  return await fetchGet<Budget.Budget[]>("http://localhost:3000/budgets");
}

export default GetBudgets;
