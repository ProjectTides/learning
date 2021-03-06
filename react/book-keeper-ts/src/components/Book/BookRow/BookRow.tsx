import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./BookRow.module.css";

const BookRow = (props: any) => {
  return (
    <div className={styles.BookRow}>
      <div className={styles.BookName}>{props.book.title}</div>
      <div className={styles.BookAuthor}>{props.book.author}</div>
      <div>
        <Button clicked={props.editBook} classes="Link LinkInfo">
          Edit
        </Button>
        <Button clicked={props.deleteBook} classes="Link LinkDanger">
          Delete
        </Button>
      </div>
    </div>
  );
};
export default BookRow;
