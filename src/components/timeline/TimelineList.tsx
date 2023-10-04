import React from "react";
import { motion } from "framer-motion";
import classes from "./TimelineList.module.css";
import TimelineItem from "./TimelineItem";
export interface Project {
  id: string;
  title: string;
  type: string;
  excerpt: string;
  skills: string[];
  color: string;
  imageSrc: string;
}
const mint = "#2BB897";
const celadon = "#B9D2B1";
// const honeyDew = "#E9F3E8";
// const folly = "#FF0059";
const rose = "#FF337A";

const projects: Project[] = [
  {
    id: "reech",
    title: "Reech",
    type: "Company",
    excerpt:
      "At Reech Media I had to adapt quickly to high workload and short deadlines, building new features and resolving web care support tickets for clients. I am proud to say I have overcome every challenge and grown a lot as a developer.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "JQuery",
      "PHP",
      "Sass",
      "GA4",
      "GTM",
      "SEO",
    ],
    color: mint,
    imageSrc: require("../../images/reech.png"),
  },
  {
    id: "Amanda",
    title: "Amandahillier.co.uk",
    type: "Website",
    excerpt:
      "Amanda Hillier is an artist and designer who needed a place online to show off her work. I worked closely with Amanda to create the website she desired.",
    skills: ["HTML", "CSS", "WordPress", "Server admin", "Cloudflare"],
    color: celadon,
    imageSrc: require("../../images/Amanda.png"),
  },
  {
    id: "LRS",
    title: "Liquid Roofing Systems",
    type: "Company",
    excerpt:
      "At LRS I handled customer support and eventually went on to help managing their IT infastructure and website.",
    skills: [
      "Customer Service",
      "Server Admin",
      "WordPress",
      "SEO",
      "Cloudflare",
      "Intranet",
      "VOIP",
    ],
    color: rose,
    imageSrc: require("../../images/LRS.svg").default,
  },
  {
    id: "vandiest",
    title: "Praktijkvandiest.nl",
    type: "Website",
    excerpt:
      "René van Diest is a Psychotherapist based in the Netherlands, during this project I had to overcome challenges involving the language barrier, bespoke features and geographic location with the website setup.",
    skills: ["HTML", "CSS", "WordPress", "Server Admin", "Cloudflare"],
    color: mint,
    imageSrc: require("../../images/vandiest.jpg"),
  },
  {
    id: "medstate",
    title: "Meditationalstate.com",
    type: "Website",
    excerpt:
      "Meditational State is a youtube channel with over 400K subscribers, I worked with another developer and assisted with the logo design, website and e-commerce build and setup.",
    skills: ["HTML", "CSS", "WordPress", "E-commerce"],
    color: celadon,
    imageSrc: require("../../images/medstate.webp"),
  },
  {
    id: "darwinmatrix",
    title: "app.darwinmatrix.com",
    type: "App",
    excerpt:
      "The Darwin Matrix is a Node.js based Web App that I assisted in maintaining and creating new features for.",
    skills: ["Javascript", "Node.js", "MongoDB", "HTML", "CSS", "JQuery"],
    color: rose,
    imageSrc: require("../../images/genericWebIcon.svg").default,
  },
];

const TimelineList: React.FC<{}> = () => {
  return (
    <>
      <ul className={classes.timeline}>
        <motion.svg viewBox="0 0 5 800" className={classes.centerLine}>
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="800"
            stroke="#E9F3E8"
            strokeWidth={3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: projects.length + 3 + projects.length * 0.1,
            }}
          />
        </motion.svg>
        {projects.map((project, index: number) => (
          <TimelineItem project={project} index={index} key={project.id} />
        ))}
      </ul>
    </>
  );
};

export default TimelineList;
