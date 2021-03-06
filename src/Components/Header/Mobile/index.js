import React from "react";
import { useDarkMode, useSetDarkMode } from "../../../Context/DarkMode";

function Mobile({ isOpen, setIsOpen }) {
  const darkMode = useDarkMode();
  const setdarkMode = useSetDarkMode();

  function handleClick() {
    setdarkMode(!darkMode);
    setIsOpen(false);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={darkMode ? "mobile dark-mobile" : "mobile"}>
        <div
          className="close-icon"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <i className="fi-rr-cross-circle"></i>
        </div>
        <div
          className={
            darkMode ? "mobile-options dark-mob-options" : "mobile-options"
          }
        >
          <div className="mobile-option" onClick={handleClose}>
            <a href="#Projects">
              <i className="fi-rr-edit-alt option-icon"></i>Projects
            </a>
          </div>
          <div className="mobile-option" onClick={handleClose}>
            <a href="#Skills">
              <i className="fi-rr-laptop option-icon"></i>Skills
            </a>
          </div>
          <div className="mobile-option" onClick={handleClose}>
            <a href="#Work">
              <i className="fi-rr-briefcase option-icon"></i>Work
            </a>
          </div>
          <div className="mobile-option" onClick={handleClose}>
            <a href="#Contact">
              <i className="fi-rr-user option-icon"></i>Contact
            </a>
          </div>
          <div
            className="mobile-option light-dark-option-mobile"
            onClick={handleClick}
          >
            <i className="fi-rr-opacity option-icon"></i>
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
