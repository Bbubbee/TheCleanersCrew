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
      <div className="card" style={{}}>
        <img className="card-img-top" src={getImageUrl(imgUrl)} alt="service image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard