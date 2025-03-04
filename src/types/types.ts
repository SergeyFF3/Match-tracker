export type PlayerType = {
  kills: number;
  username: string;
};

export type TeamType = {
  name: string;
  place: number;
  points: number;
  total_kills: number;
  players: PlayerType[];
};

export type MatchType = {
  awayScore: number;
  homeScore: number;
  status: string;
  time: string;
  title: string;
  awayTeam: TeamType;
  homeTeam: TeamType;
};

export type MatchDataSchema = {
  data: MatchType[];
  isLoading: boolean;
  error: null | string;
};
