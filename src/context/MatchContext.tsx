import { createContext, ReactNode, useContext, useState } from "react";
import { MatchType } from "../types/types";

type MatchContextType = {
  matches: MatchType[];
  setMatches: (state: MatchType[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  error: null | string;
  setError: (value: string) => void;
};

const MatchContextDefaultValues: MatchContextType = {
  matches: [],
  setMatches: () => {},
  isLoading: true,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
};

type Props = {
  children: ReactNode;
};

const MatchContext = createContext<MatchContextType>(MatchContextDefaultValues);

export function MatchProvider({ children }: Props) {
  const [matches, setMatches] = useState<MatchType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const value = {
    matches,
    setMatches,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}
export function useMatchContext() {
  return useContext(MatchContext);
}
