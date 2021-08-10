import React, { useState } from 'react'
import './App.css';
import AppLoader from './Components/Common/App-Loader';
import Home from './Components/Home/index'
import { useDarkMode } from './Context/DarkMode';

function App() {
  const [isLoader, setIsLoader] = useState(false)

  const darkMode = useDarkMode()

  setTimeout(() => {
    setIsLoader(true)
  }, 2000)

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      {isLoader ? (
        <Home />
      ) : (
        <AppLoader />
      )}
    </div>
  );
}

export default App;
