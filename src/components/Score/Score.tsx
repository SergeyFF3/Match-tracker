import { FC } from "react";
import styles from "./Score.module.css";

type ScoreType = {
  homeTeam: number;
  awayTeam: number;
};

export const Score: FC<ScoreType> = ({ homeTeam, awayTeam }) => (
  <div className={styles.wrapper}>
    <p className={styles.counter}>{homeTeam || "-"}</p>
    <p className={styles.counter}>:</p>
    <p className={styles.counter}>{awayTeam || "-"}</p>
  </div>
);
