import styles from "./Header.module.scss";

import logoSVG from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSVG} />
    </header>
  );
}
