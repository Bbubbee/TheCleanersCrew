import { getImageUrl } from "../../utils"
import styles from "./Clients.module.css"

interface Props {
  name: string,
  logoUrl: string
}

const ClientItem = ({ name, logoUrl }: Props) => {
  return (
    <div className={styles.clientItem}>
      <img src={getImageUrl(logoUrl)} alt="logo url" />
      <h4>{name}</h4>
    </div>
  )
}

export default ClientItem