
import { ReactNode } from "react"
import styles from "./Shared.module.css"

interface Props {
  children: ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <div className={styles.button}>{children}</div>
  )
}

export default Button