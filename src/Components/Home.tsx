import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <>
      <div id="navigation">
        <div className="text-center my-3">
          <ScrollLink
            to="main"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Home
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            About
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <ScrollLink
            to="skill"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Skill
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <ScrollLink
            to="edu"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Education
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <ScrollLink
            to="exp"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Experience
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <ScrollLink
            to="CV"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            CV
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <ScrollLink
            to="proj"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Project
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Contact
          </ScrollLink>
        </div>
        <div className="text-center my-3">
          <RouterLink
            to="/certification"
            className={({ isActive }) => (isActive ? "active" : "text-light")}
          >
            Certification
          </RouterLink>
        </div>
      </div>
    </>
  );
};
export default Home;
