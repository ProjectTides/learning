import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let classes = [styles.Button];
  if (props.classes) {
    props.classes.split(" ").map((classSingle) => {
      classes.push(styles[classSingle]);
    });
  }
  return (
    <button className={classes.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
