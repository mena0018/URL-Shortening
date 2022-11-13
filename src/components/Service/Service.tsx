import CardService from "../CardService/CardService";
import styles from "./Service.module.scss";
import { servicesData } from "../../data/services";
import { CardType } from "../../types/CardType";

const Service = () => {
  const listServices = servicesData.map((item: CardType, index: number) => (
    <CardService
      title={item.title}
      description={item.description}
      icon={item.icon}
      key={index}
    />
  ));

  return (
    <>
      <div className={styles.services_informations}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className={styles.services_list}>{listServices}</div>
    </>
  );
};

export default Service;
