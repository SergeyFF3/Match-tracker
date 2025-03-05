import { FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.logo}>Match Tracker</div>
    <div className={styles.buttonLabel}></div>
  </div>
);
