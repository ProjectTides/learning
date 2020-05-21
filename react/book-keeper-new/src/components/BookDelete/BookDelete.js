import React from "react";
import "./BookDelete.css";

function BookDelete(props) {
  return (
    <u className="delete-book c-pointer" onClick={props.onClick}>
      Delete
    </u>
  );
}

export default BookDelete;
