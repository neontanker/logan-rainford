import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Page1 from "./pages/FirstSlide";
import Page2 from "./pages/SecondPage";
import Page3 from "./pages/ThirdPage";
import "./App.css";
import NextPageButton from "./components/NextPageButton";

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
      page: (
        <Page1 key="page1" onNextPage={handleNextPage} pageId={"home-page"} />
      ),
      background: "#1F1B32",
    },
    {
      page: (
        <Page2 key="page2" onNextPage={handleNextPage} pageId={"timeline"} />
      ),
      background: "#1F1B32",
    },
    {
      page: (
        <Page3 key="page3" onNextPage={handleNextPage} pageId={"about-me"} />
      ),
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
      <AnimatePresence mode="wait">
        <>
          {pages[currentPage].page}
          <NextPageButton onNextPage={handleNextPage} isLastPage={isLastPage} />
        </>
      </AnimatePresence>
    </div>
  );
};

export default App;
