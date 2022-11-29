import styles from "./Link.module.scss";
import { LinkProps } from "../../../types/LinkProps";
import { useState } from "react";
import { motion } from "framer-motion";

const Link = ({ oldLink, newLink }: LinkProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(newLink);
    setIsClicked(true);
  };

  return (
    <div className={styles.link}>
      <p className={styles.old_link}>{oldLink}</p>
      <p className={styles.new_link}>{newLink}</p>

      <motion.button
        style={{ backgroundColor: `${isClicked && "#3b3054"}` }}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isClicked ? "Copied!" : "Copy"}
      </motion.button>
    </div>
  );
};

export default Link;
