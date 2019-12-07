import React from "react";
import "./button.css";

interface Props {
  onClick: AnyFunction;
  small?: boolean;
  className?: string;
}

const ButtonBase: React.FC<Props> = ({
  children,
  small,
  onClick,
  className
}) => (
  <button
    className={`btn ${className} ${small ? "btn-small" : ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const ButtonPrimary = ButtonBase;

export const ButtonSecondary: React.FC<Props> = ({
  className,
  ...restProps
}) => <ButtonBase {...restProps} className={`btn-secondary ${className}`} />;

export const ButtonOutline: React.FC<Props> = ({ className, ...restProps }) => (
  <ButtonBase {...restProps} className={`btn-outline ${className}`} />
);
