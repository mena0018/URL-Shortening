import CardService from "../../components/CardService/CardService";
import styles from "./Services.module.scss";
import { servicesData } from "../../data/services";
import { CardType } from "../../types/CardType";


export default function Services() {

   const listServices = servicesData.map((item: CardType, index: number) => 
      <CardService title={item.title}
                   description={item.description}
                   icon={item.icon}
                   key={index}
      />
   )

  return (
    <div className={styles.services_container} id="features"> 
      <div className={styles.services_content}> 

         <form className={styles.services_header}>
            <input type="text" 
                   name="shorten-link"     
                   placeholder="Shorten a link here..." />
            <button>Shorten it!</button>
         </form>

         <div className={styles.services_informations}>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
         </div>

         <div className={styles.services_list}>
            {listServices}
         </div>
         
      </div>
    </div>
  )
}
