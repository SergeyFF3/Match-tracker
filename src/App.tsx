import { useEffect, useState } from "react";
import { MatchDataSchema } from "./types/types";
import { getMatches } from "./api/fetchData";
import { MatchList } from "./components/MatchList";

const App = () => {
  const [matchesData, setMatchesData] = useState<MatchDataSchema>({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatchesData({
          data,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        setMatchesData({
          data: [],
          isLoading: false,
          error,
        });
      });
  }, []);

  return (
    <div className="container">
      <MatchList matchList={matchesData.data} />
    </div>
  );
};

export default App;
