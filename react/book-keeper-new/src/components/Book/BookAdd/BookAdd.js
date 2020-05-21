import React from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./BookAdd.module.css";

const bookAdd = (props) => {
  return (
    <form className={styles.BookAdd} onSubmit={props.onSubmit}>
      <Input type="text" name="title" placeholder="Book title" />
      <Input type="text" name="author" placeholder="Author name" />
      <div>
        <Button classes="Success">Add Book</Button>
      </div>
    </form>
  );
};

export default bookAdd;
