import React from "react";
import { motion } from "framer-motion";
import classes from "./TimelineItem.module.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimelineItem: React.FC<{ index: number; project: Project }> = ({
  index,
  project,
}) => {
  const BoxAnimation = (
    <>
      <motion.svg
        initial="hidden"
        animate="visible"
        className={classes.connector}
      >
        <motion.line
          x1="100"
          y1="0"
          x2="-100"
          y2="0"
          stroke={project.color}
          strokeWidth={3}
          initial={{
            pathLength: 0,
          }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            type: "spring",
            bounce: 0,
            delay: index + 1 * 0.1,
          }}
          custom={index}
        />
      </motion.svg>
      <motion.svg
        initial="hidden"
        animate="visible"
        width={"100%"}
        height={"100%"}
        className={classes.projectBorder}
      >
        <motion.rect
          stroke={project.color}
          strokeWidth={3}
          width={"100%"}
          height={"100%"}
          rx={10}
          ry={10}
          fill={"transparent"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          // initial={{ strokeDasharray: 5000, strokeDashoffset: 5000 }}
          // animate={{ strokeDasharray: 5000, strokeDashoffset: 0 }}
          transition={{
            ease: "linear",
            duration: 2,
            delay: index + 1 * 0.1 + 0.5,
          }}
        />
      </motion.svg>
    </>
  );
  // const onClickHandler = () => {};
  return (
    <div
      className={`${classes.itemContainer} ${
        !(index % 2 === 0) && classes.flipped
      }`}
    >
      {BoxAnimation}

      <motion.li
        key={project.id}
        className={`${classes.timelineItem} ${
          index % 2 === 0 ? classes.even : classes.odd
        }`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index + 1 * 0.1 }}
      >
        <div
          // @TODO:
          // onClick={(e) => {
          //   onClickHandler();
          // }}
          className={classes.contentContainer}
        >
          <img
            src={project.image.src}
            alt={project.image.alt}
            className={classes.logo}
          ></img>
          <div className={classes.projectTitle}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{project.title}</h3>
            </a>
            <h5>{project.type}</h5>
          </div>
          <p>{project.excerpt}</p>
          {project.skills.length > 0 && (
            <ul className={classes.skills}>
              <li>Skills used:</li>
              {project.skills.map((skill, i) => (
                <li key={i}>
                  <FontAwesomeIcon icon={faCircle} className={classes.circle} />
                  {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.li>
    </div>
  );
};

export default TimelineItem;
