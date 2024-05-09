import React from "react";
import { useParams } from "react-router-dom";
import Color from "./Color";
import Page404 from "./Page404";
const ColorFinder = ({ colors }) => {
  const { name } = useParams();

  if (name) {
    let color = colors.find(
      (color) => color.name.toLowerCase() === name.toLowerCase()
    );
    if (color === undefined) return <Page404 color={name} />;
    return <Color color={color} />;
  }

  return null;
};
export default ColorFinder;
