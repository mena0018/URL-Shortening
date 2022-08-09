import styles from "./Home.module.scss";
import WorkingImg from "../../images/illustration-working.svg";

export default function Home() {
  return (
    <div className={styles.home_container}>
      
      <div className={styles.bloc_img}>
         <img src={WorkingImg} alt="working illustration" />
      </div>

      <div className={styles.home_content}>
         <h1>More than just shorter links</h1>
         <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
         <button>Get Started</button>
      </div>
    </div>
  )
}
