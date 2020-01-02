import React from "react";
import classNames from "../../util/classNames";
import "./card.css";

interface Props {
  fullWidth?: boolean;
  className?: string;
}

const Card: React.FC<Props> = props => {
  const { children, fullWidth, className } = props;

  const classList = classNames(
    { "card--full-width": fullWidth },
    "card",
    className
  );

  return <div className={classList}>{children}</div>;
};

export const CardClickable: React.FC<Props & {
  onClick: AnyFunction<void>;
}> = props => {
  const { children, fullWidth, onClick, className } = props;

  const classList = classNames(
    { "card--full-width": fullWidth },
    "card card--btn",
    className
  );

  return (
    <a href="#" className={classList} onClick={onClick}>
      {children}
    </a>
  );
};

export default Card;
