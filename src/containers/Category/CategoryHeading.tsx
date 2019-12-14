import React from "react";
import "./category.css";
import { getDollarString } from "../../util/currency";

interface Props {
  title: string;
  amount: number;
}

const CategoryHeading = ({ title, amount }: Props) => (
  <div className="category-card--heading">
    <div className="category-card--title">{title}</div>
    <div>${getDollarString(amount)}</div>
  </div>
);

export default CategoryHeading;
