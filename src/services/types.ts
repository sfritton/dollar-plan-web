export namespace Budget {
  export interface Budget {
    month: number;
    year: number;
    id: number;
  }

  export interface BudgetResponse extends Budget {
    groups: Record<string, Group>;
    categories: Record<string, Category>;
    transactions: Record<string, Transaction>;
  }

  export interface Group {
    id: number;
    budget_id: number;
    title: string;
    is_income: boolean;
  }

  export interface Category {
    id: number;
    group_id: number;
    budget_id: number;
    title: string;
    planned_amount: number;
    notes: string;
  }

  export interface Transaction {
    id: number;
    category_id: number;
    group_id: number;
    budget_id: number;
    amount: number;
    date: number;
    description: string;
  }
}
