import React from "react";
import Button from "../UI/Button/Button";

const bookAdd = (props) => {
  return (
    <form className="book-form" onSubmit={props.onSubmit}>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author name" />
      <Button classes="Success">Add Book</Button>
    </form>
  );
};

export default bookAdd;
