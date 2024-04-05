import styles from "./Header.module.css"
import { getImageUrl } from "../../utils"

import Button from "../../shared/Button"


const Header = () => {
  return (
    <section id="header" className={styles.Header}>

      <img src={getImageUrl("the-cleaners-crew-logo.png")} alt="logo" />

      {/* Menu Items */}
      <div>
        <ul className={styles.menuItems}>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#footer">Contact Us</a></li>
          <li className={styles.headerBookingButton}><a href="#"><Button>Book Now</Button></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Header