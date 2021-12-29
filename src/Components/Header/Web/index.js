import React from "react";
import { useDarkMode, useSetDarkMode } from "../../../Context/DarkMode";

function Web() {
  const darkMode = useDarkMode();
  const setdarkMode = useSetDarkMode();

  function handleClick() {
    setdarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "web dark-web-options" : "web"}>
      <div className="web-option">
        <a href="#Projects">
          <i className="fas fa-edit option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#Skills">
          <i className="fas fa-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#Work">
          <i className="fas fa-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#Contact">
          <i className="fas fa-user-edit option-icon"></i>Contact
        </a>
      </div>
      <div
        className="web-option light-dark-option"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <i className="fas fa-adjust option-icon"></i>
        {darkMode ? "Light" : "Dark"}
      </div>
    </div>
  );
}

export default Web;
