import React from "react";
import styles from "./BookDelete.module.css";

function BookDelete(props) {
  return (
    <u className={styles.Delete} onClick={props.onClick}>
      Delete
    </u>
  );
}

export default BookDelete;
