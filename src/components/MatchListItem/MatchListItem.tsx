import { FC } from "react";
import { MatchType } from "../../types/types";
import styles from "./MatchListItem.module.css";
import { TeamIcon } from "../../assets/icons/TeamIcon";
import { Score } from "../Score";
import { MatchStatus } from "../MatchStatus";

export const MatchListItem: FC<MatchType> = (props) => {
  const { homeTeam, awayTeam, homeScore, awayScore, status } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <TeamIcon />
        <p className={styles.teamName}>{homeTeam.name || "-"}</p>
      </div>

      <div className={styles.score}>
        <Score homeTeam={homeScore} awayTeam={awayScore} />
        <MatchStatus status={status} />
      </div>

      <div className={styles.column}>
        <p className={styles.teamName}>{awayTeam.name || "-"}</p>
        <TeamIcon />
      </div>
    </div>
  );
};
