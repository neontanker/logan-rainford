import { motion } from "framer-motion";
import { faChevronDown, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NextPageButton.module.css";

const NextPageButton: React.FC<{
  onNextPage: () => void;
  isLastPage: boolean;
}> = ({ onNextPage, isLastPage }) => {
  // const [isDisabled, setIsDisabled] = useState(false);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNextPage();
    // setIsDisabled(true);
    // setTimeout(() => setIsDisabled(false), 300);
  };

  const variants = {
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.button
      className={classes.nextPageBtn}
      onClick={onClickHandler}
      // disabled={isDisabled}
      whileHover={"hover"}
    >
      <motion.span initial={{ opacity: 0 }} variants={variants}>
        {isLastPage ? "Restart?" : "Next Page"}
      </motion.span>
      <FontAwesomeIcon icon={isLastPage ? faRotateLeft : faChevronDown} />
    </motion.button>
  );
};

export default NextPageButton;
