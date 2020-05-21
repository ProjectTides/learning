import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";

function App() {
  return (
    <div className="app">
      <h1 className="page-title">Book Keeper</h1>
      <BookList />
    </div>
  );
}

export default App;
