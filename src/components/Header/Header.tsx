import styles from "./Header.module.css"
import { getImageUrl } from "../../utils"

import Button from "../../shared/Button"


const Header = () => {
  return (
    <div className={styles.Header}>

      <img src={getImageUrl("the-cleaners-crew-logo.png")} alt="logo" />

      {/* Menu Items */}
      <div>
        <ul className={styles.menuItems}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#"><Button>Book Now</Button></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header