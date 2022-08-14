import { CardType } from "../../types/CardType";
import styles from "./CardService.module.scss";


export default function CardService({title, icon, description}: CardType) {

  return (
    <div className={styles.card_container}>

      <div className={styles.card_header}>
         <img src={icon} alt={` logo of ${title} `} />
      </div>

      <h2>{title}</h2>
      <p>{description}</p>

    </div>
  )
}
