import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Marquee from "./Marquee";
import Experience from "./Experience";
import Project from "./Project";
import Footer from "./Footer";
import Contact from "./Contact";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="Portfolio">
      <Navbar />
      <Home />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
