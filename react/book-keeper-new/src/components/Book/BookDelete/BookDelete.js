import React from "react";
import styles from "./BookDelete.module.css";

const bookDelete = (props) => {
  return (
    <u className={styles.Delete} onClick={props.onClick}>
      Delete
    </u>
  );
};

export default bookDelete;
