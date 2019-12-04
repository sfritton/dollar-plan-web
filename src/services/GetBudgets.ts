import { Budget } from "./types";
import { fetchGet } from "../util/fetch";

async function GetBudgets() {
  return await fetchGet<Budget.Budget[]>(""); // TODO: call an actual url
}

export default GetBudgets;
