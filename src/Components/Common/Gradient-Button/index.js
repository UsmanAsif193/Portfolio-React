import React from "react";

function GradientButton({ buttonvalue, handleClick, buttondisable }) {
  return (
    <div className="gradient-div">
      <button
        className={`gradient-button ${buttondisable ? "button-hidden" : ""}`}
        onClick={handleClick}
      >
        {buttonvalue}
      </button>
    </div>
  );
}

export default GradientButton;
