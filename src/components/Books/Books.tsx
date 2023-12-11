import React, { FC, useEffect, useState } from "react";
import "./Books.css";
import SearchForm from "../SearchForm/SearchForm";
import BooksCardList from "../BooksCardList/BooksCardList";
import Preloader from "../Preloader/Preloader";
import { useGetBooksQuery } from "../../utils/books-api-slice";
import { actions } from "../../store/booksReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Categories from "../Categories/Categories";
import Sorting from "../Sorting/Sorting";
// import { ERROR_TEXT } from "../../utils/constants";

const Books: FC = () => {

  const dispatch = useAppDispatch();
  const displayAmount = useAppSelector((store) => store.books.displayAmount);
  const [query, setQuery] = useState('');

  const args = {
    maxResults: displayAmount,
    query: query || undefined
  };

  const {data: books, isLoading, isSuccess} = useGetBooksQuery(args);

  const [validMessage, setValidMessage] = useState('');

  useEffect(() => {
    setValidMessage('');
  }, [query]);

  function onChange(e: any) {
    setQuery(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // query ? isLoading : setValidMessage(ERROR_TEXT.ERROR_QUERY);
  }

  function handleChooseCategory(category) {
    books?.items.filter(c => c.volumeInfo.categories === category)
  }

  return (
    <main className="books">
      <h1 className="books__header">Search for books</h1>
      <SearchForm query={query}
                  validMessage={validMessage}
                  handleSubmit={handleSubmit}
                  onChange={onChange} />
      <div className="books__filter">
        <Categories handleChooseCategory={handleChooseCategory} />
        <Sorting />
      </div>
      {isLoading ?
        <Preloader />
      : books?.items.length !== 0 && isSuccess && (
        <>
          <p className="books__count">Found {books.totalItems} books</p>
          <BooksCardList books={books.items} />
        </>
      )}
    </main>
  )
}

export default Books;
