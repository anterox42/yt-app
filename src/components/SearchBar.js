import React, { useState } from "react";
import Emoji from 'a11y-react-emoji';

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
            Search <span style={{ color: "red" }}>Youtflix</span>
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
          <Emoji symbol="🎧" label="LoFi" />
        </div>
        <div className="ui button" onClick={(term) => onButtonClick("Cats")}>
        <Emoji symbol="🐱" label="Cats" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
