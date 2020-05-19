import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
  ];
}

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const book = this.props.book;
    return (
      <div>
        <div className="book-name">{book.title}</div>
        <div className="author-name">{book.author}</div>
      </div>
    );
  }
}

// class BookList
class BookList extends React.Component {
  constructor(props) {
    super(props);
  }
  showBook(index) {
    console.log("show book");
    console.log(index);
  }
  render() {
    return this.props.books.map((book, index) => (
      <div
        key={index}
        className="book-row"
        onClick={() => this.showBook(index)}
      >
        <div className="book-name">{book.title}</div>
        <div className="author-name">{book.author}</div>
      </div>
    ));
  }
}

class App extends React.Component {
  render() {
    const books = getBooks();
    return (
      <div className="app">
        <h1 className="page-title">Book Keeper</h1>
        <form className="search-form">
          <input type="text" placeholder="Search a book..." />
          <button>Search</button>
        </form>
        <BookList books={books} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
