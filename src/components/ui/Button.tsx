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

const defaultStyles = "rounded-md";
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.text}
    </button>
  );
};

<Button variant="primary" size="md" onclick={() => {}} text={"asd"} />;
