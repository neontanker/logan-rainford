import React, { useState } from "react";
import { motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import TimelinePage from "./pages/TimelinePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import Page from "./components/Page";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage((page) => page + 1);
    } else {
      setCurrentPage(0);
    }
  };

  //@TODO: integrate background images "url(" + require("./images/sky.png") + ")"
  const pages = [
    {
      page: <HomePage key="home" pageId="home" />,
      background: "#1F1B32",
    },
    {
      page: <TimelinePage key="timeline" pageId="timeline" />,
      background: "#1F1B32",
    },
    {
      page: <AboutPage key="about" pageId="about" />,
      background: "#1F1B32",
    },
  ];
  const isLastPage = currentPage >= pages.length - 1;

  return (
    <div className="app">
      <motion.div
        key="background"
        initial={{ background: pages[0].background }}
        animate={{
          background: pages[currentPage].background,
        }}
        transition={{
          duration: 1,
        }}
        className="background"
      ></motion.div>

      <Page onNextPage={handleNextPage} isLastPage={isLastPage}>
        {pages[currentPage].page}
      </Page>
    </div>
  );
};

export default App;
