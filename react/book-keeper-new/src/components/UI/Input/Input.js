import React from "react";
import styles from "./Input.module.css";

const input = (props) => {
  let classes = [styles.Input];
  if (props.classes) {
    props.classes.split(" ").map((classSingle) => {
      classes.push(styles[classSingle]);
    });
  }
  return (
    <div className={styles.FormControl}>
      {props.label && <label className={styles.Label}>{props.label}</label>}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
        onChange={props.changed}
        className={classes.join(" ")}
      />
    </div>
  );
};

export default input;
