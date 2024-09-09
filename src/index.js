import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ThemeContext from "./ThemeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeContext />
  </StrictMode>
);
