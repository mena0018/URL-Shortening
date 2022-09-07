import styles from './Footer.module.scss';
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";


const Footer = () => {
  return (
    <footer>

      <h2>Shortly</h2>
      <div className={styles.footer_content}>

        <div className={styles.col}>
          <h3>Features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>

        <div className={styles.col}>
          <h3>Ressources</h3>
          <p>Blog</p>
          <p>Developer</p>
          <p>Support</p>
        </div>

        <div className={styles.col}>
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Contact</p>
        </div>

        <div className={styles.social_media}>
          <img src={Facebook}  alt="Facebook's icon" />
          <img src={Twitter}   alt="Twitter's icon" />
          <img src={Pinterest} alt="Pinterest's icon" />
          <img src={Instagram} alt="Instagram's icon" />
        </div>

      </div>
    </footer>
  )
}

export default Footer