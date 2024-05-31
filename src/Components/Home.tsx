import React from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import DownloadIcon from "./DownloadIcon";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateAndScroll = (section:any) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -75,
        });
      }, 0);
    } else {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -75,
      });
    }
  };

  return (
    <>
      <div className="text-center my-3">
        <a href="/img/CV.pdf" download>
          <DownloadIcon /> Resume
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
            onClick={() => handleNavigateAndScroll("main")}
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
            onClick={() => handleNavigateAndScroll("about")}
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
            onClick={() => handleNavigateAndScroll("skill")}
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
            onClick={() => handleNavigateAndScroll("edu")}
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
            onClick={() => handleNavigateAndScroll("exp")}
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
            onClick={() => handleNavigateAndScroll("proj")}
          >
            Project
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Home;
