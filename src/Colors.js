import React, { useState, useEffect } from "react";
import AddColorForm from "./AddColorForm";
import { Link } from "react-router-dom";
import initialColors from "./InitialColors";
import "./Colors.css";
const Colors = () => {
  const getColorsFromLocalStorage = () => {
    const storedColors = JSON.parse(window.localStorage.getItem("colors"));
    return storedColors || initialColors;
  };

  const [colors, setColors] = useState(getColorsFromLocalStorage);

  useEffect(() => {
    window.localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div>
      <h1>Welcome to colors.</h1>
      <p>Would you like to add a new color?</p>
      <AddColorForm setColors={setColors} />
      <p>Here are all the available colors.</p>
      <div>
        {colors.map((color) => (
          <Link to={`/colors/${color.name.toLowerCase()}`} key={color.name}>
            <button className="Colors-button" style={{ color: color.value }}>
              {color.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Colors;
