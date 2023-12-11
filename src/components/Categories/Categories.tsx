import React, { FC } from "react";
import "./Categories.css";
// import { ICategories } from "../../interfaces/books";
import { CATEGORIES } from "../../utils/constants";

interface IProps {
  /*categories: ICategories;*/
  handleChooseCategory(value: string): void;
}

const Categories: FC<IProps> = ({ handleChooseCategory }) => {
/*
  function handleCategory(category) {
    handleChooseCategory(category);
  }
*/
  return (
    <form className="categories">
      <label className="categories__title" htmlFor="categories">Categories</label>
      <select className="categories__select" name="categories" id="categories">
      {CATEGORIES.map((category) => (
        <option
          key={category.id}
          value={category.category}
          onClick={() => handleChooseCategory(category.category)}
        >
          {category.category}
        </option>
      ))}
      </select>
    </form>
  )
}

export default Categories;