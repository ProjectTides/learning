import React from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./BookEdit.module.css";

const BookEdit = (props: any) => {
  return (
    <div className={styles.DialogContainer}>
      <div className={styles.Dialog}>
        <p className={styles.DialogMessage}>Edit Book</p>
        <form onSubmit={props.onSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Book title"
            value={props.title}
            label="Title"
          />
          <Input
            type="text"
            name="author"
            placeholder="Author name"
            value={props.author}
            label="Author"
          />
          <div>
            <Button classes="Success">Save</Button>
            <Button type="button" clicked={props.canceled} classes="Light">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookEdit;
