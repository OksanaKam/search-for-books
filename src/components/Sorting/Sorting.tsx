import React from "react";
import "./Sorting.css";
import { SORTING } from "../../utils/constants";

const Sorting = ({ onChange }) => {
  return (
    <form className="sorting">
      <label className="sorting__title" htmlFor="categories">Sorting by</label>
      <select
        className="sorting__select"
        name="sorting"
        id="sorting"
        onChange={onChange}
      >
      {SORTING.map((sort) => (
        <option
          key={sort.id}
          value={sort.category}
        >
          {sort.category}
        </option>
      ))}
      </select>
    </form>
  )
}

export default Sorting;