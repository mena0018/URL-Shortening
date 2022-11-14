import styles from "./Link.module.scss";
import { LinkProps } from "../../../types/LinkProps";
import { useState } from "react";

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

      <button
        style={{ backgroundColor: `${isClicked && "#3b3054"}` }}
        onClick={handleClick}
      >
        {isClicked ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default Link;
