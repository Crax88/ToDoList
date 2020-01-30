import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="type to search"
      className="form-control search-bar"
    />
  );
};

export default SearchBar;
