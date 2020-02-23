import React from "react";
import { InputText } from "../../components/Input";
import { useSelector } from "react-redux";
import { getIsAdjustingBudget } from "../../state/ui/selectors";
import "./group.css";
import { useAction } from "../../state/hooks";
import groupsSlice from "../../state/groups/slice";

interface Props {
  title: string;
  id: number;
}

function GroupHeading(props: Props) {
  const { title, id } = props;
  const updateTitle = useAction(groupsSlice.actions.updateGroupTitle);
  const isAdjustingBudget = useSelector(getIsAdjustingBudget);

  return (
    <div className="group--title">
      {isAdjustingBudget ? (
        <InputText
          className="group--title-input"
          value={title}
          label="Group name"
          onChange={e => updateTitle({ id, title: e.target.value })}
        />
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
}

export default GroupHeading;
