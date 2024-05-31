import React from "react";
import { Link as ScrollLink } from "react-scroll";
import DownloadIcon from "./DownloadIcon";

const Home = () => {
  return (
    <>
      <div className="text-center my-3">
      <a href="/img/CV.pdf" download>
        <DownloadIcon/> Resume
        </a>
        </div>
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
      </div>
    </>
  );
};
export default Home;
