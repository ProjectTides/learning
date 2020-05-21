import React, { Component } from "react";
import "./BookList.css";
import BookAdd from "../components/BookAdd/BookAdd";
import BookSearch from "../components/BookSearch/BookSearch";
import BookRow from "../components/BookRow/BookRow";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: getBooks(),
      allBooks: getBooks(),
      viewBook: null,
    };
    this.addBook = this.addBook.bind(this);
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
  viewBook(index) {
    console.log(index);
  }
  deleteBook(index) {
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({ books: books, allBooks: books });
  }
  filterBooks(e) {
    e.preventDefault();
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
        <div className="forms-row">
          <BookAdd onSubmit={this.addBook} />
          <BookSearch onChange={this.filterBooks} />
        </div>
        {this.state.books.map((book, index) => (
          <BookRow
            key={index}
            book={book}
            viewBook={() => this.viewBook(index)}
            deleteBook={() => this.deleteBook(index)}
          />
        ))}
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
