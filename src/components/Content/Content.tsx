import { FC, useEffect } from "react";
import { MatchList } from "../MatchList";
import { getMatches } from "../../api/fetchData";
import { useMatchContext } from "../../context/MatchContext";
import { Loader } from "../Loader";
import styles from "./Content.module.css";

export const Content: FC = () => {
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

  if (matchesData.isLoading) {
    return (
      <div className={styles.wrapper}>
        <Loader />
      </div>
    );
  }

  return <MatchList matchList={matchesData.data} />;
};
