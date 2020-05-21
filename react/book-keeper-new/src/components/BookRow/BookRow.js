import React from "react";
import BookDelete from "../BookDelete/BookDelete";
import "./BookRow.css";

function BookRow(props) {
  return (
    <div className="book-row">
      <div className="book-name">{props.book.title}</div>
      <div className="author-name">{props.book.author}</div>
      <div>
        <u className="view-book c-pointer" onClick={props.viewBook}>
          View
        </u>
        <u className="edit-book c-pointer">Edit</u>
        <BookDelete onClick={props.deleteBook} />
      </div>
    </div>
  );
}
export default BookRow;
