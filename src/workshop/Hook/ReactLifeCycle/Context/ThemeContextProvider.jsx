import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(null)
    const dataContext = { theme, setTheme }
    return (
        <ThemeContext.Provider value={dataContext}>
            {children}
        </ThemeContext.Provider>
    )
}