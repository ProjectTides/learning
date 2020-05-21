import React from "react";
import Button from "../Button/Button";

const dialog = (props) => {
  return (
    <div>
      <h3>{props.message}</h3>
      <Button clicked={props.clickedYes}>Yes</Button>
      <Button clicked={props.clickedCancel}>Cancel</Button>
    </div>
  );
};

export default dialog;
