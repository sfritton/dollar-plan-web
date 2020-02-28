import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeGetCategoryOptions } from "./selectors";
import { Select } from "../../components/Input";

const CategorySelect: React.FC = () => {
  const { budgetId } = useParams();

  const categoryOptions = useSelector(makeGetCategoryOptions(budgetId || ""));

  if (!categoryOptions || categoryOptions.length < 1) return null;

  return (
    <Select label="Category" className="transaction-drawer--category-select">
      {categoryOptions.map(({ title, categories }) => (
        <optgroup key={title} label={title}>
          {categories.map(({ title: catTitle, id }) => (
            <option key={id} value={id}>
              {catTitle}
            </option>
          ))}
        </optgroup>
      ))}
    </Select>
  );
};

export default CategorySelect;
