import Button from "../../shared/Button"
import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.About}>
      <img src={getImageUrl("spray-bottle.jpg")} alt="" />

      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Us</h2>

        {/* Text description */}
        <div >
          <p>
            Welcome to The Cleaners Crew, your premier cleaning service in Sydney, NSW!
          </p>

          <p>
            We're dedicated to delivering top-quality cleaning solutions for residential and commercial spaces. With our skilled team and eco-friendly products, we ensure a spotless and healthy environment tailored to your needs.
          </p>

          <p>
            Experience the difference with The Cleaners Crew. Book your cleaning appointment today!
          </p>
        </div>

        <Button>Book Now</Button>
      </div>


    </div>
  )
}

export default About