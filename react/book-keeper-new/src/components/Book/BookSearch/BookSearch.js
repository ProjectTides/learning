import React from "react";
import Input from "../../UI/Input/Input";

const bookSearch = (props) => {
  return (
    <form>
      <Input
        type="text"
        placeholder="Search a book..."
        changed={props.onChange}
      />
    </form>
  );
};

export default bookSearch;
