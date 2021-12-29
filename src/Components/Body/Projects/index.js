import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Seperator from "../../Common/Seperator";
import axios from "axios";
import GradientButton from "../../Common/Gradient-Button";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loadMore, setloadMore] = useState(3);
  const [buttondisable, setbuttondisable] = useState(false);

  useEffect(() => {
    axios("api/projects").then((res) => setProjects(res.data));
  }, []);
  const loadMoreProjects = () => {
    setloadMore(projects.length);
    setbuttondisable(true);
  };

  return (
    <div className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      {projects.slice(0, loadMore).map((project) => {
        return <ProjectCard project={project} key={project.title} />;
      })}
      <GradientButton
        buttonvalue={"Load More"}
        handleClick={loadMoreProjects}
        buttondisable={buttondisable}
      />
    </div>
  );
}

export default Projects;
