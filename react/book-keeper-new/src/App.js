import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import BookList from "./containers/BookList";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.PageTitle}>Book Keeper</h1>
      <BookList />
    </div>
  );
}

export default App;
