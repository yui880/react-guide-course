import React from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  console.log("Button Running");

  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
