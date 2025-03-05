import { FC } from "react";
import styles from "./MatchStatus.module.css";
import { MatchState } from "../../types/types";

type MatchStatusType = {
  status: string;
};

export const MatchStatus: FC<MatchStatusType> = ({ status }) => {
  const statusStyles: Record<MatchState, string> = {
    [MatchState.LIVE]: styles.live,
    [MatchState.FINISHED]: styles.finished,
    [MatchState.PREPARING]: styles.preparing,
  };

  return (
    <span
      className={`${styles.status} ${statusStyles[status as MatchState] || ""}`}
    >
      {status || "-"}
    </span>
  );
};
