import "./styles.css";
import Theme from "./ThemeContext";

import { useState, useEffect, useContext } from "react";

export default function App() {
  const [color, setColor] = useState("#fff");
  const [options, setOptions] = useState([
    {
      name: "white",
      value: "#fff",
    },
    {
      name: "red",
      value: "#ff5733",
    },
    {
      name: "blue",
      value: "#2bf5fe",
    },
    {
      name: "green",
      value: "#1b9808",
    },
  ]);
  const themes = useContext(Theme);
  console.log(themes);
  //useEffect(() => {
  //setOptions(themes);
  //}, []);

  handleChange = (e) => {
    let color = options.filter((option) => option.value === e.target.value);
    console.log(e.target.value, " @### ", color);
    setColor(color[0].value);
    document.body.style.backgroundColor = color[0].value;
  };

  return (
    <div className="App">
      <h2>Select the Page Color</h2>
      <select
        onChange={this.handleChange}
        style={{ width: "150px", height: "30px" }}
      >
        {options &&
          options.map((option, index) => {
            return (
              <option
                key={index}
                value={option.value}
                style={{ backgroundColor: option.value }}
              >
                {option.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
