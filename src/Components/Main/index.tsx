import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./style.scss";
const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  console.log(inView);
  return (
    <>
      <div className="main-content">
        <div className="main" >
          <div className="main-text">
            <h1 className={inView ? "typewriter" : ""} ref={ref}>
              Hi !!!
            </h1>
            <br />
            <h3 className={inView ? "h3-typewriter" : ""} ref={ref}>
              i am
            </h3>
            <br />
          </div>
          <div className="react-img">
            <img src="/logo192.png" alt="" className="imglogo"  />
          </div>
          <div className="dev dev-typewriter" ref={ref}>
            {inView && (
              <motion.h1
                animate={{ x: [20, 20, 20], opacity: 1, scale: 1 }}
                transition={{
                  duration: 5,
                  delay: 0.3,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                Developer
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
