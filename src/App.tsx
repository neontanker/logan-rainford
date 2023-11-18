import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence initial={false}>
        <motion.div
          key={pages[currentPage].background}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          style={{ background: pages[currentPage].background }}
          className="background"
        ></motion.div>
      </AnimatePresence>

      <Page
        onNextPage={handleNextPage}
        isLastPage={currentPage >= pages.length - 1}
      >
        {pages[currentPage].page}
      </Page>
    </div>
  );
};

export default App;
