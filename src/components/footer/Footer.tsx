import styles from "./Footer.module.css"
import { getImageUrl } from "../../utils"

const Footer = () => {
  return (
    <section id="footer" className={styles.Footer}>
      <div className={styles.logo}>
        <h2>The Cleaners Crew</h2>
        <h4>Cleaning with <span style={{ color: "var(--color-secondary)" }}>Care</span></h4>
      </div>

      <ul className={styles.contactContainer}>

        <li className={styles.contactItem}>
          <img src={getImageUrl("icons/phone-icon.svg")} alt="phone icon" />
          0423 651 934
        </li>

        <li className={styles.contactItem}>
          <img src={getImageUrl("icons/email-icon.svg")} alt="phone icon" />
          thecleanerscrew@thecleanerscrew.net
        </li>

        <li className={styles.contactItem}>
          <img src={getImageUrl("icons/briefcase-icon.svg")} alt="phone icon" />
          ABN: 13377306130
        </li>


      </ul>

      <ul className={styles.navContainer}>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </section>
  )
}

export default Footer