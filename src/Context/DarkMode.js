import React, { useState, useContext, createContext } from 'react'

const DarkModeContext = createContext()

const SetDarkModeContext = createContext()

export const useDarkMode = () => { return useContext(DarkModeContext) }

export const useSetDarkMode = () => { return useContext(SetDarkModeContext) }

const DarkMode = ({ children }) => {
    const [darkMode, setdarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)
    return (
        <DarkModeContext.Provider value={darkMode}>
            <SetDarkModeContext.Provider value={setdarkMode}>
                {children}
            </SetDarkModeContext.Provider>
        </DarkModeContext.Provider>
    )
}

export default DarkMode
