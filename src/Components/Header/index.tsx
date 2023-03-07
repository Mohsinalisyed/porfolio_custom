import React, { useState, useEffect } from "react";
import { FaBitbucket, FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./style.scss";
const Header = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";
  return (
    <>
      <div className={` Main-header ${cls}`}>
        <div className="Header">
          <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand protfolio-text" href="###">
              <span>P</span>ort<span>F</span>olio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to="/">
                    <a className="nav-link" href="###">
                      Home
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="###"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/download">
                    <a className="nav-link" href="###">
                      Download
                    </a>
                  </NavLink>
                </li>
              </ul>
              <span className=" ">
                <ul className="navbar-nav mr-auto ">
                  <li className="nav-item d-flex">
                    <a
                      className="nav-link"
                      href=" https://mohsin__5775@bitbucket.org/mohsin__5775/portfolio.git"
                      data-tooltip-id="bitbucket"
                      data-tooltip-content="Bitbucket"
                      data-tooltip-place="top"
                    >
                      <FaBitbucket />
                    </a>
                    <Tooltip id="bitbucket" />
                    <a
                      className="nav-link px-3"
                      href="###"
                      data-tooltip-id="github"
                      data-tooltip-content="Github"
                      data-tooltip-place="top"
                    >
                      <FaGithub />
                    </a>
                    <Tooltip id="github" />
                    <a
                      className="nav-link"
                      href="https://famous-conkies-d36fd3.netlify.app"
                      data-tooltip-id="netlify"
                      data-tooltip-content="Netlify"
                      data-tooltip-place="top"
                    >
                      <SiNetlify />
                    </a>
                    <Tooltip id="netlify" />
                  </li>
                </ul>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
