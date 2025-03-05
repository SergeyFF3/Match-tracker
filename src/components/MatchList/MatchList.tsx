import { FC } from "react";
import { MatchType } from "../../types/types";
import { MatchListItem } from "../MatchListItem";
import styles from "./MatchList.module.css";

type MatchListType = {
  matchList: MatchType[];
};

export const MatchList: FC<MatchListType> = ({ matchList }) => {
  if (matchList.length === 0) {
    return (
      <div className={styles.empty}>
        <h1 className={styles.title}>Список пуст</h1>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {matchList.map((match, index) => (
        <MatchListItem key={match.title + index} {...match} />
      ))}
    </div>
  );
};
