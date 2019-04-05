import React from "react";
import "./styles.css";

const Header = props => (
  <header className="Header">
    <h1>
      <span role="img" aria-label="tree">
        🌴
      </span>
      {props.title}
    </h1>
    <span>Back Office - ADMIN</span>
  </header>
);

export default Header;
