import React, { FC } from "react";
import "./BooksCard.css";
import { IBook } from "../../interfaces/books";
import * as ImageNotFound from "../../images/purple-search.svg";

interface IProps {
  book: IBook;
}

const BooksCard: FC<IProps> = ({ book }) => {

  const imageLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ImageNotFound;

  return (
    <li className="book">
      <img
        className="book__image"
        src={imageLink}
        alt={book.volumeInfo.title}></img>
      <h2 className="book__title">{book.volumeInfo.title}</h2>
      <p className="book__author">{book.volumeInfo.authors}</p>
      <p className="book__category">{book.volumeInfo.categories}</p>
    </li>
  )
}

export default BooksCard;