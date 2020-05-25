import React, { useState } from "react";
import styles from "./BookList.module.css";
import BookAdd from "../components/Book/BookAdd/BookAdd";
import BookEdit from "../components/Book/BookEdit/BookEdit";
import BookSearch from "../components/Book/BookSearch/BookSearch";
import BookRow from "../components/Book/BookRow/BookRow";
import Dialog from "../components/UI/Dialog/Dialog";

const BookList = () => {
  const [books, setBooks] = useState(getBooks());
  const [allBooks, setAllBooks] = useState(getBooks());
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [bookToBeDeleted, setBookToBeDeleted] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [bookToBeUpdated, setBookToBeUpdated] = useState(null);

  const addBook = async (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
    };
    setBooks([...books, newBook]);
    setAllBooks([...books, newBook]);
  };
  const deleteBook = () => {
    books.splice(bookToBeDeleted.index, 1);
    setBooks(books);
    setAllBooks(books);
    setBookToBeDeleted(null);
    setShowConfirmDialog(false);
  };
  const cancelDeleteBook = () => {
    setBookToBeDeleted(null);
    setShowConfirmDialog(false);
  };
  const updateBook = (e) => {
    e.preventDefault();
    books[bookToBeUpdated.index] = {
      title: e.target.title.value,
      author: e.target.author.value,
    };
    setBooks(books);
    setAllBooks(books);
    setBookToBeUpdated(null);
    setShowEditDialog(false);
  };
  const cancelEditBook = () => {
    setBookToBeUpdated(null);
    setShowEditDialog(false);
  };
  const filterBooks = (e) => {
    e.preventDefault();
    const searchKeyword = e.target.value;
    if (!searchKeyword) {
      setBooks(allBooks);
      return;
    }
    const matchedBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchKeyword);
    });
    setBooks(matchedBooks);
  };
  return (
    <div>
      <div>
        <div className={styles.FormsRow}>
          <BookAdd onSubmit={addBook} />
          <BookSearch onChange={filterBooks} />
        </div>
        {books.map((book, index) => (
          <BookRow
            key={index}
            book={book}
            editBook={() => {
              setShowEditDialog(true);
              setBookToBeUpdated({
                title: book.title,
                author: book.author,
                index: index,
              });
            }}
            deleteBook={() => {
              setShowConfirmDialog(true);
              setBookToBeDeleted({
                title: book.title,
                index: index,
              });
            }}
          />
        ))}
      </div>
      {showConfirmDialog && (
        <Dialog
          message={`Are you sure you want to delete the book "${bookToBeDeleted.title}"?`}
          clickedSuccess={() => deleteBook()}
          clickedCancel={() => cancelDeleteBook()}
        />
      )}
      {showEditDialog && (
        <BookEdit
          title={bookToBeUpdated.title}
          author={bookToBeUpdated.author}
          onSubmit={updateBook}
          canceled={() => cancelEditBook()}
        />
      )}
    </div>
  );
};

function getBooks() {
  return [
    {
      title: "Building Microservices",
      author: "Sam Newman",
    },
    {
      title: "Becoming a Technical Leader",
      author: "Gerald M. Weinburg",
    },
    {
      title: "Jonathan Livingston Seagull",
      author: "Richard Bach",
    },
    {
      title: "Eat That Frog!",
      author: "Brain Tracy",
    },
  ];
}

export default BookList;
