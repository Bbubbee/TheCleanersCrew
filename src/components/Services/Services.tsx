import styles from "./Services.module.css"
import services from "../../data/services.json"
import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <section id="services" className={styles.Services}>
      <h2 className={styles.title}>
        Services
      </h2>

      <ul className={styles.serviceCardContainer}>
        {services.map((service, id) =>
          <li>
            <ServiceCard key={id} title={service.title} body={service.body} imgUrl={service.imgUrl} />
          </li>
        )}
      </ul>

    </section>
  )
}

export default Services