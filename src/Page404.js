import React from "react";
import "./Color.css";
import Nav from "./Nav";
const Page404 = ({ color }) => {
  return (
    <div className="Color" style={{ backgroundColor: "white", color: "black" }}>
      <Nav />
      <h3 className="Color-title">Oops! - {color} not found.</h3>
    </div>
  );
};
export default Page404;
