import { createContext, ReactNode, useContext, useState } from "react";
import { MatchType } from "../types/types";

export type MatchDataSchema = {
  data: MatchType[];
  isLoading: boolean;
  error: null | string;
};

type MatchContextType = {
  matchesData: MatchDataSchema;
  setMatchesData: (state: MatchDataSchema) => void;
};

const MatchContextDefaultValues: MatchContextType = {
  matchesData: {
    data: [],
    isLoading: true,
    error: null,
  },
  setMatchesData: () => {},
};

type Props = {
  children: ReactNode;
};

const MatchContext = createContext<MatchContextType>(MatchContextDefaultValues);

export function MatchProvider({ children }: Props) {
  const [matchesData, setMatchesData] = useState<MatchDataSchema>({
    data: [],
    isLoading: true,
    error: null,
  });

  const value = { matchesData, setMatchesData };

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}
export function useMatchContext() {
  return useContext(MatchContext);
}
