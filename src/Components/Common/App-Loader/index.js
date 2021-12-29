import React from "react";
import Loader from "react-loader-spinner";
import { useDarkMode } from "../../../Context/DarkMode";

const AppLoader = () => {
  const darkMode = useDarkMode();
  return (
    <div>
      <div className="loader">
        <div
          className={darkMode ? "loader-text dark-loader-text" : "loader-text"}
        >
          Loading
        </div>
        <Loader
          className="loader-dots"
          type="ThreeDots"
          color="#7918f2"
          height={70}
          width={70}
        />
      </div>
    </div>
  );
};

export default AppLoader;
