import React from "react";
import "./button.css";
import classNames from "../../util/classNames";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  small?: boolean;
  className?: string;
  onClick?: AnyFunction;
}

const LinkBase: React.FC<Props> = ({
  children,
  small,
  to,
  className,
  onClick
}) => (
  <Link
    className={classNames({ "btn-small": small }, "btn", className)}
    to={to}
    onClick={onClick}
  >
    {children}
  </Link>
);

export const LinkPrimary = LinkBase;

export const LinkSecondary: React.FC<Props> = ({ className, ...restProps }) => (
  <LinkBase {...restProps} className={`btn-secondary ${className}`} />
);

export const LinkOutline: React.FC<Props> = ({ className, ...restProps }) => (
  <LinkBase {...restProps} className={`btn-outline ${className}`} />
);
