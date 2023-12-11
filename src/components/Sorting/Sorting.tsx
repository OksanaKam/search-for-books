import React, { FC } from "react";
import "./Sorting.css";
import { SORTING } from "../../utils/constants";


const Sorting: FC = () => {
  return (
    <form className="sorting">
      <label className="sorting__title" htmlFor="categories">Sorting by</label>
      <select className="sorting__select" name="categories" id="categories">
      {SORTING.map((sort) => (
        <option key={sort.id} value={sort.category}>{sort.category}</option>
      ))}
      </select>
    </form>
  )
}

export default Sorting;