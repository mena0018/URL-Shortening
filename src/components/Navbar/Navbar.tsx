import styles from "./Navbar.module.scss";
import logo from "../../images/logo.svg";
import { useState } from "react";
import cx from 'classnames';


export default function Navbar() {

   const [isActive, setIsActive] = useState(false)
   const toggleModal = () => setIsActive(!isActive)

  return (
    <nav className={styles.nav}>

      <div className={styles.logo_container}>
         <img src={logo} alt="logo" />
      </div>


      <div className={isActive ? cx(styles.nav_content, styles.active) : styles.nav_content}>

         <ul className={isActive ? cx(styles.links, styles.active)  : styles.links}>
            <li className={styles.nav_item}>
               <a href="/">Features</a>
            </li>
            <li className={styles.nav_item}>
               <a href="/"> Pricing</a>
            </li> 
            <li className={styles.nav_item}>
               <a href="/">Ressources</a>
            </li>
         </ul>

         <div className={styles.lines}></div>

         <div className={isActive ? cx(styles.sign, styles.active) : styles.sign}>
            <button className={styles.login_btn}>Login</button>
            <button className={styles.signup_btn}>Sign Up</button>
         </div>
         
      </div>

      <div className={styles.container_lines}
           onClick={toggleModal}>
         <div className={styles.lines}></div>
         <div className={styles.lines}></div>
         <div className={styles.lines}></div>
      </div>

    </nav>
  );
}
