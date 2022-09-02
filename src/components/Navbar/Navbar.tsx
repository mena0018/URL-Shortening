import styles from "./Navbar.module.scss";
import logo from "../../images/logo.svg";
import { useState } from "react";
import cx from 'classnames';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Navbar() {

   const [isActive, setIsActive] = useState(false)
   const toggleModal = () => setIsActive(!isActive)

  return (
    <nav>
      <div className={styles.navbar_container}>

         <div className={styles.logo_container}>
            <img src={logo} alt="logo" />
         </div>

         <div className={isActive ? cx(styles.nav_content, styles.active)
                                  : styles.nav_content}>
            
            <ul className={isActive ? cx(styles.links, styles.active)  : styles.links}>
               <li><a href="#features">Features</a></li>
               <li><a href="#pricing"> Pricing</a></li> 
               <li><a href="#ressources">Ressources</a></li>
            </ul>

            <div className={styles.white_line}></div>

            <div className={isActive ? cx(styles.btn_container, styles.active) 
                                     : styles.sign}>
               <button className={styles.login_btn}>Login</button>
               <button className={styles.call_to_action}>Sign Up</button>
            </div>
         </div>

         <div className={styles.hamburger} onClick={toggleModal}>
            {isActive ? <AiOutlineClose /> : <AiOutlineMenu /> }
         </div>

      </div>
    </nav>
  );
}
