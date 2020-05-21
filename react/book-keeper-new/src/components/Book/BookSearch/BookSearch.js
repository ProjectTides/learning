import React from "react";

const bookSearch = (props) => {
  return (
    <form className="book-form">
      <input
        type="text"
        placeholder="Search a book..."
        onChange={props.onChange}
      />
    </form>
  );
};

export default bookSearch;
