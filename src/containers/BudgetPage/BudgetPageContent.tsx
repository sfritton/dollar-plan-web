import React, { useState } from "react";
import Group from "../Group";
import "./budget-page.css";
import { BudgetWithMetadata } from "../../state/budgets/slice";
import { Status } from "../../state/types";
import { ButtonFloatingAction } from "../../components/Button";
import IconAdd from "../../icons/IconAdd";
import Drawer from "../../components/Drawer";

interface Props {
  budget?: BudgetWithMetadata;
}

function BudgetPageContent(props: Props) {
  const { budget } = props;
  const [isOpen, setIsOpen] = useState(false);

  if (!budget || budget.status !== Status.SUCCESS) return null;

  return (
    <div className="budget-page">
      <section>
        <h2>Income</h2>
        {budget.incomeIds.map(id => (
          <Group
            groupId={id}
            key={id}
            noTitle={budget.incomeIds.length === 1}
          />
        ))}
      </section>
      <section>
        <h2>Expenses</h2>
        {budget.expenseIds.map(id => (
          <Group groupId={id} key={id} />
        ))}
      </section>
      <ButtonFloatingAction
        Icon={IconAdd}
        label="Add transactions"
        onClick={() => setIsOpen(true)}
      />
      <Drawer
        title="Add transactions"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Wow, look at this!
      </Drawer>
    </div>
  );
}

export default BudgetPageContent;
