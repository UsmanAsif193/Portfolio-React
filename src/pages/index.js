import React from "react";
import AppLoader from "../Components/Common/App-Loader";
import Home from "../Components/Home/index";
import { useDarkMode } from "../Context/DarkMode";

function App() {
  const darkMode = useDarkMode();
  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <Home />
    </div>
  );
}

export default App;
