import React, { FC } from "react";
import "./Categories.css";
import { CATEGORIES } from "../../utils/constants";

const Categories = ({ onChange }) => {

  return (
    <form className="categories">
      <label className="categories__title" htmlFor="categories">Categories</label>
      <select
        className="categories__select"
        name="categories"
        id="categories"
        onChange={onChange}
      >
      {CATEGORIES.map((category) => (
        <option
          key={category.id}
          value={category.category}
        >
          {category.category}
        </option>
      ))}
      </select>
    </form>
  )
}

export default Categories;