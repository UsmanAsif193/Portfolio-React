import React, { useState, useContext, createContext } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => { return useContext(DarkModeContext) }

const DarkMode = ({ children }) => {
    const [darkMode, setdarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false)
    return (
        <DarkModeContext.Provider value={
            darkMode,
            setdarkMode
        }>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkMode
