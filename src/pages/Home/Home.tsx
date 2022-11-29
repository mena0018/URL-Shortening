import styles from "./Home.module.scss";
import WorkingImg from "../../images/illustration-working.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_content}>
        <motion.div
          className={styles.bloc_img}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <img src={WorkingImg} alt="working illustration" />
        </motion.div>

        <motion.div
          className={styles.home_description}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <motion.a
            href="#ressources"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
