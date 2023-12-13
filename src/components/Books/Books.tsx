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
import { ERROR_TEXT } from "../../utils/constants";

const Books: FC = () => {

  const dispatch = useAppDispatch();
  const query = useAppSelector((store) => store.books.query);
  const category = useAppSelector((store) => store.books.categories);
  const sorting = useAppSelector((store) => store.books.orderBy);
  const startIndex = useAppSelector((store) => store.books.startIndex);
  const displayAmount = useAppSelector((store) => store.books.maxResults);

  const args = {
    query: query,
    categories: category || 'all',
    orderBy: sorting || 'relevance',
    startIndex: startIndex,
    maxResults: displayAmount
  };

  const {data: books, isLoading, isSuccess} = useGetBooksQuery(args);

  const [validMessage, setValidMessage] = useState('');

  useEffect(() => {
    dispatch(actions.clearBooks);
  }, [dispatch]);

  useEffect(() => {
    if (query) {
      dispatch(actions.getBooks(books?.items ? books.items : []));
    }
  }, [books, dispatch, query]);

  useEffect(() => {
    setValidMessage('');
  }, [query]);

  function onChange(e: any) {
    dispatch(actions.setQuery(e.target.value))
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    query ? isLoading : setValidMessage(ERROR_TEXT.ERROR_QUERY);
  }

  function handleLoadBooks() {
    dispatch(actions.setStartIndex(startIndex + 30));
  }

  function onChangeCategory(e: any) {
    dispatch(actions.setCategory(e.target.value));
  }

  function onChangeSorting(e: any) {
    dispatch(actions.setSorting(e.target.value));
  }

  return (
    <main className="books">
      <h1 className="books__header">Search for books</h1>
      <SearchForm query={query}
                  validMessage={validMessage}
                  handleSubmit={handleSubmit}
                  onChange={onChange} />
      <div className="books__filter">
        <Categories onChange={onChangeCategory} />
        <Sorting onChange={onChangeSorting} />
      </div>
      {isLoading ?
        <Preloader />
      : books?.items.length !== 0 && isSuccess && (
        <>
          <p className="books__count">Found {books.totalItems} books</p>
          <BooksCardList books={books.items} />
          <button
            className="books__more"
            type="button"
            onClick={() => handleLoadBooks()}
          >
            Load more
          </button>
        </>
      )}
    </main>
  )
}

export default Books;
