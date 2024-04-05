import Button from "../../shared/Button"
import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

const About = () => {
  return (
    <section id="about" className={styles.About} >
      <img src={getImageUrl("spray-bottle.jpg")} alt="" />

      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.blueRectangle}></div>
          <h2 className={styles.title}>About Us</h2>
        </div>


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


    </section>
  )
}

export default About