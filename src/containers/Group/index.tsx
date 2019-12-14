import React, { useMemo } from "react";
import { makeGetGroup } from "../../state/groups/selectors";
import { useSelector } from "react-redux";
import GroupHeading from "./GroupHeading";
import "./group.css";
import Category from "../Category";

interface Props {
  groupId: number;
}

function Group(props: Props) {
  const { groupId } = props;
  const getGroup = useMemo(() => makeGetGroup(groupId), [groupId]);

  const group = useSelector(getGroup);

  if (!group) return null;

  return (
    <div className="group">
      <GroupHeading title={group.title} />
      <div className="group--category-cards">
        {group.categoryIds.map(id => (
          <Category categoryId={id} key={id} />
        ))}
      </div>
    </div>
  );
}

export default Group;
