import React from "react";
import "./input.css";

interface Props {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: AnyFunction;
}

const Input = ({ className, value, placeholder, onChange }: Props) => (
  <input
    className={`input ${className}`}
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;
