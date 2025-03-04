import { FC } from "react";
import { MatchType } from "../../types/types";
import { MatchListItem } from "../MatchListItem";

type MatchListType = {
  matchList: MatchType[];
};

export const MatchList: FC<MatchListType> = ({ matchList }) => {
  if (matchList.length === 0) {
    return (
      <div>
        <h1>Список пуст</h1>
      </div>
    );
  }

  return (
    <div>
      {matchList.map((match, index) => (
        <MatchListItem key={match.title + index} {...match} />
      ))}
    </div>
  );
};
