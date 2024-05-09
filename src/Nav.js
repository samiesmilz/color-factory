import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/"></Link>
      <Link to="/colors">
        <button className="Nav-button">Explore Colors</button>
      </Link>
    </nav>
  );
};
export default Nav;
