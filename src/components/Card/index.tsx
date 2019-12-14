import React from "react";
import classNames from "../../util/classNames";
import "./card.css";

interface Props {
  fullWidth?: boolean;
}

const Card: React.FC<Props> = props => {
  const { children, fullWidth } = props;

  const className = classNames({ "card--full-width": fullWidth }, "card");

  return <div className={className}>{children}</div>;
};

export const CardClickable: React.FC<Props & {
  onClick: AnyFunction<void>;
}> = props => {
  const { children, fullWidth, onClick } = props;

  const className = classNames(
    { "card--full-width": fullWidth },
    "card card--btn"
  );

  return (
    <a href="#" className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Card;
