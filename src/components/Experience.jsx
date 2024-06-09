import React from "react";
import { HugeiconsArrowUpRight01 } from "../content/content";

const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience_content">
          <ul className="experience_list_menu">
            <li className="experience_list">
              <div className="experience_left">
                <HugeiconsArrowUpRight01 className="experience_arrow" />
                <h3>React Developer & Designer</h3>
              </div>
              <div className="experience_right">
                <p>kodukku classifieds private limited</p>
                <p>Dec 2023 - present</p>
              </div>
            </li>
            <li className="experience_list">
              <div className="experience_left">
                <HugeiconsArrowUpRight01 className="experience_arrow" />
                <h3>Front End Developer</h3>
              </div>
              <div className="experience_right">
                <p>Enrich Money</p>
                <p>Dec 2022 - Aug 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
