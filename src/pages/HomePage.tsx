import React from "react";
import { motion } from "framer-motion";

const avatar = require("../images/profile6.png");

const HomePage: React.FC<{ pageId: string }> = ({ pageId }) => {
  return (
    <motion.div
      key={pageId}
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
      transition={{ duration: 0.5, type: "tween" }}
      className={`${pageId} section`}
    >
      <h1>Logan Rainford</h1>
      <h4>Junior Developer</h4>
      <div className="avatar">
        <img src={avatar} alt="Avatar" className="rounded-avatar" />
      </div>
      <div className="content">
        <p>
          I am a self motivated and aspiring web developer. My interest in
          programming started when I was 14. I have been self-employed since
          2015 working as an IT Support Technician and running a web hosting and
          development service for local businesses. From this experience I have
          developed practical problem solving skills and an understanding of how
          businesses work.
        </p>
      </div>
    </motion.div>
  );
};

export default HomePage;
