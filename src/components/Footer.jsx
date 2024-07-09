import React from "react";
import { SkillIconsGithubLight, SkillIconsLinkedin } from "../content/content";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <h2>Let's Talk</h2>
        <div className="footer_media">
          <div className="footer_text">
            <p>  <SkillIconsGithubLight className="footer_icon" /></p>
            <p>https://github.com/Aravindh2501</p>
          </div>
          <div className="footer_text">
            <p> <SkillIconsLinkedin className="footer_icon" /></p>
            <p>www.linkedin.com/in/aravindh2501</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
