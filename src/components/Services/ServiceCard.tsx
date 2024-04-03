import styles from "./ServiceCard.module.css"
import { getImageUrl } from "../../utils"

interface Props {
  title: string,
  body: string
  imgUrl: string
}

const ServiceCard = ({ title, body, imgUrl }: Props) => {
  return (
    <div className={styles.card}>
      <img src={getImageUrl(imgUrl)} alt="service image" />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default ServiceCard