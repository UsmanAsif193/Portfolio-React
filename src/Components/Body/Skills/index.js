import React, { useState, useEffect } from "react";
import Seperator from "../../Common/Seperator";
import SkillCard from "./SkillCard";
import axios from "axios";

function Skills() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("api/skills").then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section" key={item.type}>
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} key={skill.name} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
