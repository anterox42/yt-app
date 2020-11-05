import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  const onButtonClick = (term) => {
    setTerm(term);
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment" style={{ marginTop: "10px" }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>
            <span style={{ color: "red" }}>YouTube</span> Video Search
          </label>
          <div className="ui action input">
            <input
              type="text"
              value={term}
              placeholder="Search..."
              onChange={(event) => {
                setTerm(event.target.value);
              }}
            />
            <button class="ui red button">Search</button>
          </div>
        </div>
      </form>
      <div style={{ marginTop: "5px" }}>
        <div
          className="ui button"
          onClick={(term) => onButtonClick("Lo-Fi")}
        >
          Lo-Fi
        </div>
        <div className="ui button" onClick={(term) => onButtonClick("Cats")}>
          Cats
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
