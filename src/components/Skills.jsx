import React from "react";
import { Technologies, Tools } from "../content/content";

const Skills = () => {
  return (
    <section className="skill">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill_content">
          <div className="skill_top">
            <h3>Design Tools I Use</h3>
            <div className="skill_all">
              {Tools.map((tool, index) => (
                <div className="skill_btn" key={index}>
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="skill_icon"
                  />
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="skill_top">
            <h3>Technologies I Use</h3>
            <div className="skill_all">
              {Technologies.map((tech, index) => (
                <div className="skill_btn" key={index}>
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="skill_icon"
                  />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
