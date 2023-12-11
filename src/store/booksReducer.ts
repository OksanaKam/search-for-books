import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../interfaces/books";
import { apiSlice } from "../utils/books-api-slice";

type TBooksState = {
  books: IBook[],
  query: string,
  displayAmount: number
};

const initialState: TBooksState = {
  books: [],
  query: '',
  displayAmount: 30
}

const booksReducer = createSlice({
  name: 'BooksReducer',
  initialState,
  reducers: {
    getBooks(state, action) {

    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setDisplayAmount(state, action: PayloadAction<number>) {
      state.displayAmount = action.payload;
    }
  }
  /*
  extraReducers: (builder) => {
    builder
    .addCase(apiSlice.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload.items];
      state.totalItems = action.payload.totalItems;
    })
  }
  */
})

export const actions = booksReducer.actions;
export default booksReducer.reducer;