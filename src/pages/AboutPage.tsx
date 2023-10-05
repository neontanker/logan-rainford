import React from "react";
import { motion } from "framer-motion";
const image = require("../images/Logan_Meghan.png");

const AboutPage: React.FC<{ pageId: string }> = ({ pageId }) => {
  return (
    <motion.div
      key={pageId}
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
      transition={{ duration: 0.5, type: "tween" }}
      className={`${pageId} section`}
    >
      <div className="title">
        <h1>About me</h1>
      </div>
      <div className="image-container">
        <img src={image} alt={""}></img>
      </div>
      <div className="content">
        <p>
          I like gaming, music and have a love for art and creativity.
          <br /> <br />
          In my spare time I like to go running or walking, play games with my
          friends or work on personal projects and goals.
          <br /> <br />
          If you want to learn more you can visit my{" "}
          <a
            href="https://github.com/neontanker"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>{" "}
          or contact me at{" "}
          <a href="mailto:loganrainford42@gmail.com">
            loganrainford42@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
