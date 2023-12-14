import { ReactNode } from "react";
import cls from "./Button.module.scss";

interface ButtonProps {
  id?: string;
  type?: "submit" | "reset" | "submit";
  onClick?: () => void;
  outline?: boolean;
  children?: ReactNode;
  style?: Record<string, string | number>;
}

export const Button = ({
  id,
  type = "submit",
  onClick,
  outline = false,
  children,
  style,
}: ButtonProps) => {
  return (
    <button
      style={style}
      className={`${cls.Button} ${outline ? cls.outline : ""}` + ``}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
};
