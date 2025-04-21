interface Buttonprops {
  varient: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  Text: String;
  startIcon?: any;
  endIcon?: any;
  onclick: () => void;
}

export const Button = (props: ButtonProps) => {
  return <button></button>;
};
