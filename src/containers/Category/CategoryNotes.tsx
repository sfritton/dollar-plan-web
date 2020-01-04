import React from "react";
import { useSelector } from "react-redux";
import { getIsAdjustingBudget } from "../../state/ui/selectors";
import Input from "../../components/Input";

interface Props {
  notes: string;
}

function CategoryNotes(props: Props) {
  const { notes } = props;

  const isAdjustingBudget = useSelector(getIsAdjustingBudget);

  if (isAdjustingBudget)
    return (
      <div className="category-card--notes">
        <Input value={notes} onChange={() => {}} placeholder="Notes" />
      </div>
    );

  if (!notes) return null;

  return <div className="category-card--notes">{notes}</div>;
}

export default CategoryNotes;
