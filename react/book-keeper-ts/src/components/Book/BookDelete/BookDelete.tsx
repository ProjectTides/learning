import React from "react";
import styles from "./BookDelete.module.css";

const BookDelete = (props: any) => {
  return (
    <u className={styles.Delete} onClick={props.onClick}>
      Delete
    </u>
  );
};

export default BookDelete;
