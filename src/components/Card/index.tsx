import React from "react";
import classNames from "../../util/classNames";
import "./card.css";

interface Props {
  className?: string;
}

const Card: React.FC<Props> = props => {
  const { children, className } = props;

  const classList = classNames({}, "card", className);

  return <div className={classList}>{children}</div>;
};

export const CardClickable: React.FC<Props & {
  onClick: AnyFunction<void>;
}> = props => {
  const { children, onClick, className } = props;

  const classList = classNames({}, "card card--btn", className);

  return (
    <a href="#" className={classList} onClick={onClick}>
      {children}
    </a>
  );
};

export default Card;
