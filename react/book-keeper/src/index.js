import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
    this.state = {
      books: getBooks(),
    };
  }
  viewBook(index) {
    console.log("view book");
    console.log(index);
  }
  deleteBook(index) {
    const books = this.state.books;
    books.splice(index, 1);
    this.setState({ books: books });
  }
  render() {
    return this.state.books.map((book, index) => (
      <div key={index} className="book-row">
        <div className="book-name">{book.title}</div>
        <div className="author-name">{book.author}</div>
        <div>
          <u
            className="view-book c-pointer"
            onClick={() => this.viewBook(index)}
          >
            View
          </u>
          <u className="edit-book c-pointer">Edit</u>
          <u
            className="delete-book c-pointer"
            onClick={() => this.deleteBook(index)}
          >
            Delete
          </u>
        </div>
      </div>
    ));
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="page-title">Book Keeper</h1>
        <form className="search-form">
          <input type="text" placeholder="Search a book..." />
          <button>Search</button>
        </form>
        <BookList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

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
