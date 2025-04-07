import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContextProvider";

const ReactLifeCycle8 = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  useEffect(() => {
    setTheme(sessionStorage.getItem('theme'))
  }, [])
  
  useEffect(() => {
    sessionStorage.getItem('theme')
  }, [theme])
  
  const themeStyle = {
    color: theme === "light" ? "blue" : "red",
    background: theme === "light" ? "white" : "black",
    padding: 10,
    borderRadius: 10,
  };

  return (
    <>
      <div style={themeStyle}>ReactLifeCycle8</div>
    </>
  );
};

export default ReactLifeCycle8;
