import React, { FC } from "react";
import "./BooksCardList.css";
import BooksCard from "../BooksCard/BooksCard";
import { IBook } from "../../interfaces/books";

interface IProps {
  books: IBook[];
}

const BooksCardList: FC<IProps> = ({ books }) => {
  return (
    <section className="book-list">
      <ul className="book-list__container">
        {books.map((book) => {
          return (
            <BooksCard key={book.id} book={book} />
          );
        })}
      </ul>
    </section>
  )
}

export default BooksCardList;