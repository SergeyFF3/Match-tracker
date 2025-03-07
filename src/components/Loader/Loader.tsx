import { FC } from "react";
import styles from "./Loader.module.css";

export const Loader: FC = () => (
  <div className={styles.ldsRing}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
