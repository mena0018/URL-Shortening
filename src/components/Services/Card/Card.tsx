import { CardType } from "../../../types/CardType";
import styles from "./Card.module.scss";


export default function Card({title, icon, description}: Omit<CardType, "id">) {

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
