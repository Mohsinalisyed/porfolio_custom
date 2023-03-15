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
        <h1>Experience</h1>

        <div className="card  text-white container1">
          <div className="card-body">
            <div className="">
              <h6>Kreashion Software Pvt Ltd</h6>
              {toggle && (
                <div>
                  <h5 className="job-position">InternShip</h5>
                  <p>Work on Web Development Project.</p>
                  <p>
                    Learn Languages Html , CSS , JavaScript , JQuery, BootStrap,
                    MySql.
                  </p>
                  <p className="job-role">
                    <span>July-2020</span>
                    <span>Sep-2020</span>
                  </p>
                </div>
              )}
            </div>

            <p onClick={handleToggle} className="view-all">
              {" "}
              {!toggle ? "View all" : "Hide"}
            </p>
          </div>
        </div>
        <div className="card  text-white container1">
          <div className="card-body">
            <div className="">
              <h6>Ideofuzion Pvt Ldt</h6>
              {show && (
                <div>
                  <h5 className="job-position" >Junior React developer</h5>
                  <p>I am working with Ideofuzion Pvt Ltd.</p>
                  <p>
                    {" "}
                    I have good knowledge in Html ,CSS , Bootstrap,JavaScript
                    and Typescript.
                  </p>
                  <p className="job-role">
                    <span>Oct-2022</span>
                    <span>Continue...</span>
                  </p>
                </div>
              )}
            </div>

            <p onClick={handleShow} className="view-all">
              {" "}
              {!show ? "View all" : "Hide"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
