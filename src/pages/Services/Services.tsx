import { FormEvent, useState } from "react";
import { fetchUrl } from "../../api/shortener";
import { ShortURL } from "../../types/ShortURL";
import styles from "./Services.module.scss";
import Service from "../../components/Services/CardList/CardList";
import Links from "../../components/Services/Links/Links";

export default function Services() {
  const [links, setLinks] = useState<ShortURL[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    fetchUrl(values.link).then((value) => setLinks([...links, value.data]));
  };

  return (
    <div className={styles.services_container} id="features">
      <div className={styles.services_content}>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            pattern="http://.*"
            name="link"
            placeholder="Shorten a link:  http://..."
            required
          />
          <button>Shorten it!</button>
        </form>

        <Links urls={links} />
        <Service />
      </div>
    </div>
  );
}
