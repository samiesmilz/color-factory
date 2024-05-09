import React from "react";
import "./Color.css";
import Nav from "./Nav";
const Color = ({ color }) => {
  return (
    <div className="Color" style={{ backgroundColor: color.value }}>
      <Nav />
      <h3 className="Color-title">It's {color.name} time.</h3>
    </div>
  );
};
export default Color;
