import React, { useState, useContext, createContext } from 'react'

const darkModeContext = createContext()

export const useDarkMode = () => { return useContext(darkModeContext) }

const DarkMode = ({ children }) => {
    const [darkMode, setdarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false)
    return (
        <darkModeContext.Provider value={
            darkMode,
            setdarkMode
        }>
            {children}
        </darkModeContext.Provider>
    )
}

export default DarkMode
