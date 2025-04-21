import { ReactElement } from "react";

interface Buttonprops {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  Text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick: () => void;
}
const variantStyles = {
  primary: "bg-gray-600 text-white",
  secondary: "bg-gray-400 text-gray-600",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = "rounded-md flex";
export const Button = (props: ButtonProps) => {
  return (
    <button
      s
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon} </div> : null}{" "}
      {props.text}
    </button>
  );
};

<Button variant="primary" size="md" onclick={() => {}} text={"asd"} />;
