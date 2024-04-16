import React, { useState } from "react";
import "./style.scss";
const Experience = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="main-exp">
      <div className="exp">
        <h2>Experience</h2>
        <div className="card  text-white container1">
          <div className="card-body">
            <div className="">
              <h6 style={{ fontSize: "20px" }}>Ideofuzion Pvt Ldt</h6>
              <h5 className="job-position" >React J's developer</h5>
              {show && (
                <div>
                  <h5 className="job-position" >Bahria Phase 4 Rawalpindi</h5>
                  <p>
                    Reviewing application requirements and interface designs,
                    implementing a single-page application utilizing React js and
                    Redux, and meeting with the development team to discuss user
                    interface concepts all contributed to better user experience and
                    overall performance. Debugging application code and
                    troubleshooting interface software. tracking and enhancing
                    front-end efficiency.Before deploying produced code to
                    production settings,performed testing , fix issues discovered
                    during testing.
                  </p>
                  <p className="job-role">
                    <span>Oct-2022</span>
                    <span>Continue...</span>
                  </p>
                </div>
              )}
            </div>

            <p onClick={handleShow} className="view-all">
              {!show ? "View Details" : "Hide"}
            </p>
          </div>
        </div>
        <div className="card  text-white container1">
          <div className="card-body">
            <div className="">
              <h6 style={{ fontSize: "20px" }}>Techozon Software House</h6>
              <h5 className="job-position">Front-end Developer</h5>
              {toggle && (
                <div>
                  <h5 className="job-position">Gulberg Green Islamabad</h5>
                  <p>
                    Designing and developing front-end interfaces using HTML,
                    CSS, JavaScript and React js. It often provide the chance to work
                    alongside experienced developers, designers, and project
                    managers. Developing and implementing front-end
                    architecture to support user interface concepts. Identifying
                    web- based user interactions. Collaborating with the team will
                    help me understand the project requirements, receive
                    guidance, and learn best practices in front-end development.
                  </p>
                  <p className="job-role">
                    <span>July-2020</span>
                    <span>Sep-2020</span>
                  </p>
                </div>
              )}
            </div>

            <p onClick={handleToggle} className="view-all">
              {!toggle ? "View Details" : "Hide"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
