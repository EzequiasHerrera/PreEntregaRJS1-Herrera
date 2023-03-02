import { BsCart3 } from 'react-icons/bs';
import styles from "./cartwidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <BsCart3 />
      <p>10</p>
    </div>
  )
}

export default CartWidget