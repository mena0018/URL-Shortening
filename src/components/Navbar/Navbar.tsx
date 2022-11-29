import styles from "./Navbar.module.scss";
import logo from "../../images/logo.svg";
import { useState } from "react";
import cx from "classnames";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleModal = () => setIsActive(!isActive);

  return (
    <nav>
      <div className={styles.navbar_container}>
        <div className={styles.logo_container}>
          <motion.img
            src={logo}
            alt="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div
          className={
            isActive
              ? cx(styles.nav_content, styles.active)
              : styles.nav_content
          }
        >
          <ul
            className={
              isActive ? cx(styles.links, styles.active) : styles.links
            }
          >
            <li>
              <motion.a
                href="#features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Features
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#pricing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {" "}
                Pricing
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#ressources"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Ressources
              </motion.a>
            </li>
          </ul>

          <div className={styles.white_line}></div>

          <div className={styles.btn_container}>
            <motion.button
              className={styles.login_btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Login
            </motion.button>
            <motion.button
              className={styles.call_to_action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Sign Up
            </motion.button>
          </div>
        </div>

        <div className={styles.hamburger} onClick={toggleModal}>
          {isActive ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
}
