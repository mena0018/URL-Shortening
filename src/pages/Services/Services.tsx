import { FormEvent, useEffect, useState } from "react";
import { fetchUrl } from "../../api/shortener";
import { ShortURL } from "../../types/ShortURL";
import styles from "./Services.module.scss";
import Service from "../../components/Services/CardList/CardList";
import Links from "../../components/Services/Links/Links";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  const [links, setLinks] = useState<ShortURL[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    fetchUrl(values.link).then((value) => setLinks([...links, value.data]));
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.services_container} id="features">
      <div className={styles.services_content}>
        <form onSubmit={handleSubmit}>
          <input
            data-aos="flip-down"
            type="url"
            pattern="https://.*"
            name="link"
            placeholder="Shorten a link: https://..."
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shorten it!
          </motion.button>
        </form>

        <Links urls={links} />
        <Service />
      </div>
    </div>
  );
}
