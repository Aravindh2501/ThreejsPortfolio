import { Grid } from "@mui/material";
import React from "react";
import {
  Grocery,
  GroceryWeb,
  Hr,
  Hrms,
  HugeiconsArrowUpRight01,
  Jd,
  JdAni,
} from "../content/content";

const Project = () => {
  return (
    <div className="project" id="Project">
      <div className="container">
        <h2>Project</h2>
        <div className="project_content Project_card1">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <div className="project_card_left">
                <img src={Hr} alt="HrmsImage" />
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className="project_card_right">
                <div className="project_title">
                  <h3>HRMS Website</h3>
                  <a href="https://hrmsdashboardmodern.netlify.app/"> <HugeiconsArrowUpRight01 className="project_arrow" /></a>
                </div>
                <h5>Technologies</h5>
                <div className="project_card_tech">
                  {Hrms.map((tech, index) => (
                    <div className="tech_btn" key={index}>
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
            </Grid>
          </Grid>
        </div>
        <div className="project_content Project_card2">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <div className="project_card_left">
                <img src={Grocery} alt="GrocerYImage" />
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className="project_card_right">
                <div className="project_title">
                  <h3>Grocery Website</h3>
                  <a href="https://happiegroceryshop.netlify.app/"> <HugeiconsArrowUpRight01 className="project_arrow" /> </a>
                </div>

                <h5>Technologies</h5>
                <div className="project_card_tech">
                  {GroceryWeb.map((tech, index) => (
                    <div className="tech_btn" key={index}>
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
            </Grid>
          </Grid>
        </div>
        <div className="project_content project_card3">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <div className="project_card_left">
                <img src={Jd} alt="JackDanielImage" />
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className="project_card_right">
                <div className="project_title">
                  <h3>JD Website</h3>
                  <a href="https://aravindh2501.github.io/JD-Animation/"> <HugeiconsArrowUpRight01 className="project_arrow" /> </a>
                </div>

                <h5>Technologies</h5>
                <div className="project_card_tech">
                  {JdAni.map((tech, index) => (
                    <div className="tech_btn" key={index}>
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
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Project;
