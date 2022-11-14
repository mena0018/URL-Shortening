import styles from "./Links.module.scss";
import Link from "../Link/Link";
import { ShortURL } from "../../../types/ShortURL";

type LinkProps = {
  urls: ShortURL[];
};

const Links = ({ urls }: LinkProps) => {
  const links = urls.map((item: ShortURL) => (
    <Link oldLink={item.destination} newLink={item.shortUrl} key={item.id} />
  ));

  return <div className={styles.shorten_links_container}>{links}</div>;
};

export default Links;
