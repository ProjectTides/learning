import React, { Component } from "react";
import styles from "./BookList.module.css";
import BookAdd from "../components/Book/BookAdd/BookAdd";
import BookEdit from "../components/Book/BookEdit/BookEdit";
import BookSearch from "../components/Book/BookSearch/BookSearch";
import BookRow from "../components/Book/BookRow/BookRow";
import Dialog from "../components/UI/Dialog/Dialog";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: getBooks(),
      allBooks: getBooks(),
      viewBook: null,
      showConfirmDialog: false,
      bookToBeDeleted: null,
      showEditDialog: false,
      bookToBeUpdated: null,
    };
    this.addBook = this.addBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
  }
  addBook(e) {
    e.preventDefault();
    const books = [
      ...this.state.books,
      {
        title: e.target.title.value,
        author: e.target.author.value,
      },
    ];
    this.setState({ books: books, allBooks: books });
  }
  deleteBook() {
    const books = this.state.books;
    books.splice(this.state.bookToBeDeleted.index, 1);
    this.setState({
      books: books,
      allBooks: books,
      bookToBeDeleted: null,
      showConfirmDialog: false,
    });
  }
  cancelDeleteBook() {
    this.setState({ bookToBeDeleted: null, showConfirmDialog: false });
  }
  updateBook(e) {
    e.preventDefault();
    let books = this.state.books;
    books[this.state.bookToBeUpdated.index] = {
      title: e.target.title.value,
      author: e.target.author.value,
    };

    this.setState({
      books: books,
      allBooks: books,
      bookToBeUpdated: null,
      showEditDialog: false,
    });
  }
  cancelEditBook() {
    this.setState({ bookToBeUpdated: null, showEditDialog: false });
  }
  filterBooks(e) {
    e.preventDefault();
    console.log("clicked");
    const books = this.state.books;
    const searchKeyword = e.target.value;
    if (!searchKeyword) {
      this.setState({ books: this.state.allBooks });
      return;
    }
    const matchedBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchKeyword);
    });
    this.setState({ books: matchedBooks });
  }
  render() {
    return (
      <div>
        <div>
          <div className={styles.FormsRow}>
            <BookAdd onSubmit={this.addBook} />
            <BookSearch onChange={this.filterBooks} />
          </div>
          {this.state.books.map((book, index) => (
            <BookRow
              key={index}
              book={book}
              editBook={() =>
                this.setState({
                  showEditDialog: true,
                  bookToBeUpdated: {
                    title: book.title,
                    author: book.author,
                    index: index,
                  },
                })
              }
              deleteBook={() =>
                this.setState({
                  showConfirmDialog: true,
                  bookToBeDeleted: { title: book.title, index: index },
                })
              }
            />
          ))}
        </div>
        {this.state.showConfirmDialog && (
          <Dialog
            message={`Are you sure you want to delete the book "${this.state.bookToBeDeleted.title}"?`}
            clickedSuccess={() => this.deleteBook()}
            clickedCancel={() => this.cancelDeleteBook()}
          />
        )}
        {this.state.showEditDialog && (
          <BookEdit
            title={this.state.bookToBeUpdated.title}
            author={this.state.bookToBeUpdated.author}
            onSubmit={this.updateBook}
            canceled={() => this.cancelEditBook()}
          />
        )}
      </div>
    );
  }
}

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
