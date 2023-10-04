import { ReactNode } from "react";
import { motion } from "framer-motion";

const Page: React.FC<{
  onNextPage: () => void;
  children: ReactNode;
  pageId: string;
}> = ({ onNextPage, children, pageId }) => {
  return (
    <div className={`${pageId} slide`}>
      <div className="container">
        <motion.div
          key={pageId}
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -500 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="section"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
export default Page;
