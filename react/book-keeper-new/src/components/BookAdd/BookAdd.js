import React from "react";

function BookAdd(props) {
  return (
    <form className="book-form" onSubmit={props.onSubmit}>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author name" />
      <button>Add Book</button>
    </form>
  );
}

export default BookAdd;
