import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1 className="text-center">Employee Directory</h1>
        <p className="text-center">
          Click arrow next to Last Name to sort alphabetically.
        </p>
      </div>
    </header>
  );
};

export default Header;