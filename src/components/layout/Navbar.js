import { Link } from "react-router-dom";

import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <Container>
          <Link to="/">
            <img src={logo} alt="Costs"></img>
          </Link>
          <ul className={styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
            <li>
              <Link to="/company">Empresa</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;
