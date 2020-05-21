import React from "react";
import Button from "../Button/Button";
import styles from "./Dialog.module.css";

const dialog = (props) => {
  return (
    <div className={styles.DialogContainer}>
      <div className={styles.Dialog}>
        <p className={styles.DialogMessage}>{props.message}</p>
        <div class="actions">
          <Button classes="Info" clicked={props.clickedYes}>
            Yes
          </Button>
          <Button classes="Light" clicked={props.clickedCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default dialog;
