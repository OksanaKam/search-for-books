import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooksApi, TBooksArgs } from '../interfaces/books';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1',
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksApi, TBooksArgs>({
      query: (args) => ({
        url: '/volumes',
        params: {
          q: args.query,
          maxResults: 30
          /*key: API_Key*/
        }
      })
    })
  })
})

export const { useGetBooksQuery } = apiSlice;