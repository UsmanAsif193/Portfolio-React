import React from "react";
import { useDarkMode } from "../../../Context/DarkMode";

function SkillCard({ skill }) {
  const darkMode = useDarkMode();
  return (
    <div className="skill-card">
      {darkMode ? (
        <div className="skill-icon">
          <i className={skill.darkiconClass} data-icon={skill.dataIcon}></i>
        </div>
      ) : (
        <div className="skill-icon">
          <i className={skill.iconClass} data-icon={skill.dataIconDark}></i>
        </div>
      )}
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
