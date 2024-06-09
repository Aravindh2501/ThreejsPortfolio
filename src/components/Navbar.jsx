import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLogo, Navlist } from "../content/content";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_logo">
        <img src={NavLogo} alt="Logo" className="logo" />
      </div>
      <div className="navbar_menu">
        <ul className="nav_menu">
          {Navlist.map((list, index) => (
            <li className="nav_list" key={index}>
              {list}
            </li>
          ))}
        </ul>
      </div>
      <div className="nav_menu_icon">
        <Icon icon="hugeicons:menu-11" className="nav_icon" />
      </div>
    </div>
  );
};

export default Navbar;
