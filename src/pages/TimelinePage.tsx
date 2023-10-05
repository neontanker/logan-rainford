import React from "react";
import TimelineList from "../components/timeline/TimelineList";
import { motion } from "framer-motion";

const TimelinePage: React.FC<{ pageId: string }> = ({ pageId }) => {
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
        <h1>My Work</h1>
      </div>
      <TimelineList />
    </motion.div>
  );
};

export default TimelinePage;
