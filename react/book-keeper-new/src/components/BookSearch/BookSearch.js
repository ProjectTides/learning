import React from "react";

function BookSearch(props) {
  return (
    <form className="book-form">
      <input
        type="text"
        placeholder="Search a book..."
        onChange={props.onChange}
      />
    </form>
  );
}

export default BookSearch;
