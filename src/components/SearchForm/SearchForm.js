import React from "react";
import "./SearchForm.css";

function SearchForm({ query,
                      validMessage,
                      handleSubmit,
                      onChange }) {
  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit} noValidate>
        <div className="search-form__input-group">
          <input className="search-form__input"
                 name="search"
                 placeholder="Книга"
                 type="text"
                 value={query}
                 onChange={onChange}/>
          <button className="search-form__button" type="submit"></button>
        </div>
        <span className="search-form__error">{validMessage}</span>
      </form>
    </section>
  )
}

export default SearchForm;