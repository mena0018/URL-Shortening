import styles from "./Services.module.scss";

export default function Services() {
  return (
    <div className={styles.services_container}> 

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
      
    </div>
  )
}
