import React from "react";
import { useSelector } from "react-redux";
import { getIsAdjustingBudget } from "../../state/ui/selectors";
import { InputText } from "../../components/Input";
import { useAction } from "../../state/hooks";
import categoriesSlice from "../../state/categories/slice";

interface Props {
  notes: string;
  id: number;
}

function CategoryNotes(props: Props) {
  const { notes, id } = props;

  const updateNotes = useAction(categoriesSlice.actions.updateCategoryNotes);
  const isAdjustingBudget = useSelector(getIsAdjustingBudget);

  if (isAdjustingBudget)
    return (
      <div className="category-card--notes">
        <InputText
          className="category-card--notes--input"
          value={notes}
          onChange={e => updateNotes({ id, notes: e.target.value })}
          label="Notes"
        />
      </div>
    );

  if (!notes) return null;

  return <div className="category-card--notes">{notes}</div>;
}

export default CategoryNotes;
