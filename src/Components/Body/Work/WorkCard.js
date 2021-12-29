import React from "react";
import { useDarkMode } from "../../../Context/DarkMode";

function WorkCard({ item }) {
  const darkMode = useDarkMode();
  return (
    <div className="work-card">
      <img src={item.companyLogo} alt={item.company} className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className={darkMode ? "work-dates dark-work-date" : "work-dates"}>
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
