import styles from "./Clients.module.css"
import clients from "../../data/clients.json"
import ClientItem from "./ClientItem"

const Clients = () => {
  return (
    <section id="clients" className={styles.Clients}>
      <h2 className={styles.title}> Clients </h2>
      <div className={styles.clientItemsContainer}>
        {clients.map((client, id) =>
          <ClientItem name={client.name} logoUrl={client.logo_url} key={id} />
        )}
      </div>
    </section>
  )
}

export default Clients