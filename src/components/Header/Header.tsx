import { FC } from "react";
import styles from "./Header.module.css";
import { Button } from "../Button";
import { UpdateIcon } from "../../assets/icons/UpdateIcon";
import { useMatchContext } from "../../context/MatchContext";
import { getMatches } from "../../api/fetchData";
import { Alert } from "../Alert";
import { AlertType } from "../../types/types";

export const Header: FC = () => {
  const { error, isLoading, setError, setIsLoading, setMatches } =
    useMatchContext();

  const updateData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getMatches();
      setMatches(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Match Tracker</div>

      <div className={styles.actions}>
        {Boolean(error) && <Alert type={AlertType.ERROR} text={error || ""} />}
        <Button onClick={updateData} disabled={isLoading}>
          <div className={styles.buttonContent}>
            <p>Обновить</p>
            <UpdateIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};
