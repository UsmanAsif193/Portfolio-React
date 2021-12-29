import React, { useState, useEffect } from "react";
import Seperator from "../../Common/Seperator";
import SkillCard from "./SkillCard";
import axios from "axios";
import GradientButton from "../../Common/Gradient-Button";

function Skills() {
  const [data, setData] = useState([]);
  const [loadMore, setloadMore] = useState(3);
  const [buttondisable, setbuttondisable] = useState(false);
  useEffect(() => {
    axios.get("api/skills").then((response) => {
      setData(response.data);
    });
  }, []);
  const loadMoreProjects = () => {
    setloadMore(data.length);
    setbuttondisable(true);
  };

  return (
    <>
      <Seperator />
      <div className="skills">
        <label className="section-title">Skills</label>
        <div className="skills-container">
          {data.slice(0, loadMore).map((item) => {
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
          <GradientButton
            buttonvalue={"See All"}
            handleClick={loadMoreProjects}
            buttondisable={buttondisable}
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
