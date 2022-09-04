import CardService from "../../components/CardService/CardService";
import styles from "./Services.module.scss";
import { servicesData } from "../../data/services";


export default function Services() {

   const listServices = servicesData.map((item, index) => 
      <CardService title={item.title}
                   description={item.description}
                   icon={item.icon}
                   key={index}
      />
   )

  return (
    <div className={styles.services_container}> 
      <div className={styles.services_content}> 

         <div className={styles.services_header}>
            <input type="text" 
                  name="shorten-link"     
                  placeholder="Shorten a link here..." />
            <button>Shorten it!</button>
         </div>

         <div className={styles.services_informations}>
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
         </div>

         <div className={styles.services_list}>
            {listServices}
         </div>
         
      </div>
    </div>
  )
}
