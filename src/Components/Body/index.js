import React from "react";
import About from "./About/index";
import Projects from "./Projects/index";
import Skills from "./Skills/index";
import Work from "./Work/index";
import Contact from "./Contact/index";

function Body() {
  return (
    <div className="body">
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Work">
        <Work />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
