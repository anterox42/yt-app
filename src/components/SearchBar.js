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
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
      <div style={{ marginTop: "5px" }}>
        <button
          className="ui button"
          onClick={(term) => onButtonClick("Lo-Fi")}
        >
          Lo-Fi
        </button>
        <button className="ui button" onClick={(term) => onButtonClick("Cats")}>
          Cats
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
