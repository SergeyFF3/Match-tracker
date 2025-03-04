import { useEffect } from "react";
import { getMatches } from "./api/fetchData";
import { MatchList } from "./components/MatchList";
import { useMatchContext } from "./context/MatchContext";

const App = () => {
  const { matchesData, setMatchesData } = useMatchContext();

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
