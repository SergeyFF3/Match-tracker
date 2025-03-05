import { FC, JSX } from "react";
import styles from "./Alert.module.css";
import { classNames } from "../../helpers/classNames";
import { AlertType } from "../../types/types";
import { InfoErrorIcon } from "../../assets/icons/InfoErrorIcon";

type AlertProps = {
  type: AlertType;
  text: string;
};

export const Alert: FC<AlertProps> = ({ type, text }) => {
  const alertIcon: Record<AlertType, JSX.Element> = {
    [AlertType.ERROR]: <InfoErrorIcon />,
  };

  return (
    <div className={classNames(styles.alert, {}, [styles[type]])}>
      {alertIcon[type]}
      {text}
    </div>
  );
};
