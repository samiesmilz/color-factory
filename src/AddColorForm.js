import React, { useState } from "react";
import "./AddColorForm.css";

const AddColorForm = ({ setColors }) => {
  const initialValue = {
    name: "",
    value: "#000000",
  };
  const [color, setColor] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColor((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!color.name) {
      return;
    }
    setColors((data) => [...data, color]);
    setColor(initialValue);
  };

  return (
    <div className="AddColorForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Color name"
          value={color.name}
          onChange={handleChange}
          className="AddColorForm-input"
        />
        <label htmlFor="colorPicker">Choose a color:</label>
        <input
          className="AddColorForm-input"
          type="color"
          id="colorPicker"
          name="value"
          value={color.value}
          onChange={handleChange}
        />
        <button type="submit" className="AddColorForm-button">
          Add color
        </button>
      </form>
    </div>
  );
};

export default AddColorForm;
