import styles from "./Links.module.scss";
import Link from "../Link/Link";
import { ShortURL } from "../../types/ShortURL";

type LinkProps = {
  links: ShortURL[];
};

const Links = ({ links }: LinkProps) => {
  const linkss = links.map((item: ShortURL) => (
    <Link oldLink={item.destination} newLink={item.shortUrl} key={item.id} />
  ));

  return <div className={styles.shorten_links_container}>{linkss}</div>;
};

export default Links;
