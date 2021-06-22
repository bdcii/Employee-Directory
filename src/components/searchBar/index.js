
import React from "react";

import "./style.css"

const SearchBar = (props) => {

  return (
    <form>
    <div className="form-group search-widget">
      <div className="input-group mb-3">
  
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder='Filter by Employee name'
          
        />
      </div>
    </div>
  </form>
  );
}
export default SearchBar;