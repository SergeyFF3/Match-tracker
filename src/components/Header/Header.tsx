import { FC } from "react";
import styles from "./Header.module.css";
import { Button } from "../Button";
import { UpdateIcon } from "../../assets/icons/UpdateIcon";
import { useMatchContext } from "../../context/MatchContext";
import { getMatches } from "../../api/fetchData";

export const Header: FC = () => {
  const { setMatchesData } = useMatchContext();

  const updateData = async () => {
    setMatchesData((prev) => ({ ...prev, isLoading: true }));
    try {
      const data = await getMatches();
      setMatchesData({ data, isLoading: false, error: null });
    } catch (error) {
      setMatchesData({ data: [], isLoading: false, error });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Match Tracker</div>

      <Button onClick={updateData}>
        <div className={styles.buttonContent}>
          <p>Обновить</p>
          <UpdateIcon />
        </div>
      </Button>
    </div>
  );
};
