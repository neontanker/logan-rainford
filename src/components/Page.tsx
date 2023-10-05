import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import NextPageButton from "./NextPageButton";

const Page: React.FC<{
  onNextPage: () => void;
  children: ReactNode;
  isLastPage: boolean;
}> = ({ onNextPage, children, isLastPage }) => {
  return (
    <div className="page">
      <div className="container">
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <NextPageButton onNextPage={onNextPage} isLastPage={isLastPage} />
      </div>
    </div>
  );
};
export default Page;
