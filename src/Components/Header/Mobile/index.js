import React from "react";
import { useDarkMode, useSetDarkMode } from "../../../Context/DarkMode";

function Mobile({ isOpen, setIsOpen }) {
  const darkMode = useDarkMode();
  const setdarkMode = useSetDarkMode();

  function handleClick() {
    setdarkMode(!darkMode);
    setIsOpen(false);
  }

  return (
    <>
      <div className={darkMode ? "mobile dark-mobile" : "mobile"}>
        <div
          className="close-icon"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <i className="far fa-times-circle"></i>
        </div>
        <div
          className={
            darkMode ? "mobile-options dark-mob-options" : "mobile-options"
          }
        >
          <div className="mobile-option" onClick={() => setIsOpen(false)}>
            <a href="#Projects">
              <i className="fas fa-edit option-icon"></i>Projects
            </a>
          </div>
          <div className="mobile-option" onClick={() => setIsOpen(false)}>
            <a href="#Skills">
              <i className="fas fa-laptop option-icon"></i>Skills
            </a>
          </div>
          <div className="mobile-option" onClick={() => setIsOpen(false)}>
            <a href="#Work">
              <i className="fas fa-briefcase option-icon"></i>Work
            </a>
          </div>
          <div className="mobile-option" onClick={() => setIsOpen(false)}>
            <a href="#Contact">
              <i className="fas fa-user-edit option-icon"></i>Contact
            </a>
          </div>
          <div
            className="mobile-option light-dark-option-mobile"
            onClick={handleClick}
          >
            <i className="fas fa-adjust option-icon"></i>
            {darkMode ? "Light" : "Dark"}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      )}
    </>
  );
}

export default Mobile;
