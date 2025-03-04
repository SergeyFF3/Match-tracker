import { FC } from "react";
import { MatchType } from "../../types/types";

export const MatchListItem: FC<MatchType> = (props) => {
  const { title } = props;

  return <h1>{title}</h1>;
};
