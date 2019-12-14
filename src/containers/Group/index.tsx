import React, { useMemo } from "react";
import { makeGetGroup } from "../../state/groups/selectors";
import { useSelector } from "react-redux";
import GroupHeading from "./GroupHeading";

interface Props {
  groupId: number;
}

function Group(props: Props) {
  const { groupId } = props;
  const getGroup = useMemo(() => makeGetGroup(groupId), [groupId]);

  const group = useSelector(getGroup);

  if (!group) return null;

  return (
    <div>
      <GroupHeading title={group.title} />
      <p>{group.is_income ? "Income" : "Expense"}</p>
      <p>{group.id}</p>
    </div>
  );
}

export default Group;
