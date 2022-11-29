import styles from "./Boost.module.scss";
import { motion } from "framer-motion";

const Boost = () => {
  return (
    <div className={styles.boost_container} id="pricing">
      <div className={styles.boost_content}>
        <h2>Boost your links today</h2>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Boost;
