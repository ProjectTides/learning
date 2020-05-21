import React from "react";
import Button from "../UI/Button/Button";
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
        <Button clicked={props.deleteBook} classes="Danger">
          Delete
        </Button>
      </div>
    </div>
  );
}
export default BookRow;
