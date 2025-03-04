import { FC } from "react";
import { MatchStatus as Status } from "../../types/types";
import styles from "./MatchStatus.module.css";

type MatchStatusType = {
  status: string;
};

export const MatchStatus: FC<MatchStatusType> = ({ status }) => {
  const statusStyles: Record<Status, string> = {
    [Status.LIVE]: styles.live,
    [Status.FINISHED]: styles.finished,
    [Status.PREPARING]: styles.preparing,
  };

  return (
    <span
      className={`${styles.status} ${statusStyles[status as Status] || ""}`}
    >
      {status || "-"}
    </span>
  );
};
