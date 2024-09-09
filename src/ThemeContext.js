import App from "./App";
import { createContext, useState } from "react";

const ThemeContext = () => {
  const [themes] = useState([
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

  const Theme = createContext();
  return (
    <Theme.Provider value={{ themes }}>
      <App />
    </Theme.Provider>
  );
};

export default ThemeContext;
