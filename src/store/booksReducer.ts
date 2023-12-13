import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../interfaces/books";

type TBooksState = {
  books: IBook[],
  query: string,
  startIndex: number,
  maxResults: number,
  categories: string,
  orderBy: string
};

const initialState: TBooksState = {
  books: [],
  query: '',
  startIndex: 0,
  maxResults: 30,
  categories: 'All',
  orderBy: ''
}

const booksReducer = createSlice({
  name: 'BooksReducer',
  initialState,
  reducers: {
    getBooks(state, action: PayloadAction<IBook[]>) {
      state.books = action.payload
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setStartIndex(state, action: PayloadAction<number>) {
      state.startIndex = action.payload;
    },
    setDisplayAmount(state, action: PayloadAction<number>) {
      state.maxResults = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.categories = action.payload;
      state.startIndex = 0;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.orderBy = action.payload;
    },
    clearBooks: () => initialState
  }
})

export const actions = booksReducer.actions;
export default booksReducer.reducer;