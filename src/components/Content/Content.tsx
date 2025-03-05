import { FC, useEffect } from "react";
import { MatchList } from "../MatchList";
import { getMatches } from "../../api/fetchData";
import { useMatchContext } from "../../context/MatchContext";
import { Loader } from "../Loader";
import styles from "./Content.module.css";

export const Content: FC = () => {
  const { matches, isLoading, setIsLoading, setMatches, setError } =
    useMatchContext();

  useEffect(() => {
    getMatches()
      .then((data) => {
        setIsLoading(false);
        setMatches(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Loader />
      </div>
    );
  }

  return <MatchList matchList={matches} />;
};
