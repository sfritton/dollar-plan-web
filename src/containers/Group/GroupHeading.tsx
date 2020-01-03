import React from "react";
import Input from "../../components/Input";
import { useSelector } from "react-redux";
import { getIsAdjustingBudget } from "../../state/ui/selectors";
import "./group.css";

interface Props {
  title: string;
}

function GroupHeading(props: Props) {
  const { title } = props;
  const updateTitle = (a: string) => {}; // TODO: useDispatch
  const isAdjustingBudget = useSelector(getIsAdjustingBudget);

  return (
    <div className="group--title">
      {isAdjustingBudget ? (
        <Input
          className="group--title-input"
          value={title}
          placeholder="Group name"
          onChange={e => updateTitle(e.target.value)}
        />
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
}

export default GroupHeading;
