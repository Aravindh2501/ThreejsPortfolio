import { Grid } from "@mui/material";
import React from "react";
import {
  AboutText,
  AboutText1,
  HugeiconsAdobeIndesign,
  HugeiconsDeveloper,
  HugeiconsMobileProgramming01,
} from "../content/content";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>About</h2>
        <div className="about_content">
          <div className="about_top_content">
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <div className="about_card">
                  <h3>1.4+</h3>
                  <p>Years</p>
                  <p>Experience</p>
                </div>
              </Grid>
              <Grid item sm={8}>
                <div className="about_text_content">
                  <div className="about_text1">
                    <p>Hello! I'm Muthu , a dedicated Front-end Developer and UI/UX Designer with 1.4 years of experience. I specialize in creating sleek and interactive web interfaces using HTML, CSS, JavaScript, React.js, Redux, Axios, and GSAP. I'm skilled in UI libraries like Bootstrap, Material-UI, Chakra UI and Prime React, and I use Figma for design.</p>
                    <p>My expertise includes API integration, data binding, and optimizing web performance for faster load times. I have a strong focus on writing clean, structured code and organizing projects effectively. Past projects include a stock market trading platform, an advertising website, and an HRMS dashboard.</p>
                  </div>
                  <div className="about_text2">
                    <p>Hello! I'm Muthu , a dedicated Front-end Developer and UI/UX Designer with 1.4 years of experience. I specialize in creating sleek and interactive web interfaces using HTML, CSS, JavaScript, React.js, Redux, Axios, and GSAP. I'm skilled in UI libraries like Bootstrap, Material-UI, Chakra UI and Prime React, and I use Figma for design.</p>
                    <p>My expertise includes API integration, data binding, and optimizing web performance for faster load times. I have a strong focus on writing clean, structured code and organizing projects effectively. Past projects include a stock market trading platform, an advertising website, and an HRMS dashboard.</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="about_content_cards">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <div className="about_content_card">
                  <div className="about_iconbg1">
                    <HugeiconsAdobeIndesign className="about_icon1" />
                  </div>
                  <h3>Ux/Ui Design</h3>
                  <p>
                    Crafting intuitive and engaging user interfaces and
                    experiences.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="about_content_card">
                  <div className="about_iconbg2">
                    <HugeiconsDeveloper className="about_icon2" />
                  </div>
                  <h3>React Developer</h3>
                  <p>
                    Building dynamic and responsive user interfaces with
                    React.js.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className="about_content_card">
                  <div className="about_iconbg3">
                    <HugeiconsMobileProgramming01 className="about_icon3" />
                  </div>
                  <h3>Responsive Design</h3>
                  <p>
                    Creating websites that adapt seamlessly to all devices and
                    screen sizes.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
