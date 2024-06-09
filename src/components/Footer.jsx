import React from "react";
import { SkillIconsGithubLight, SkillIconsLinkedin } from "../content/content";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2>Let's Talk</h2>
        <div className="footer_media">
          <div className="footer_text">
            <SkillIconsGithubLight className="footer_icon" />
            <p>www.github.com</p>
          </div>
          <div className="footer_text">
            <SkillIconsLinkedin className="footer_icon" />
            <p>www.Linked.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
