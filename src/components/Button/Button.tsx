import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";
import { classNames, Mods } from "../../helpers/classNames";

export enum ThemeButton {
  PRIMARY = "primary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeButton.PRIMARY,
    disabled = false,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(styles.button, mods, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
