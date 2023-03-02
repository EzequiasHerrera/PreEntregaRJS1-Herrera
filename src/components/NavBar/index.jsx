import styles from "./navbar.module.css";
import CartWidget from "../../components/CartWidget";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <p>Home</p>
      <p>Animaciones</p>
      <p>Diseños</p>
      <CartWidget />
    </nav>
  );
};

export default NavBar;