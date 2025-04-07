import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div>Current Theme: {theme}</div>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Set Theme
      </button>
    </>
  );
};

export default ToggleTheme;
