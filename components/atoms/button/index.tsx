import { FunctionComponent } from "react";

interface ButtonProps {
  value: string;
  className: string;
  onClick?: (v: any) => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  value,
  className,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {value}
    </button>
  );
};

export default Button;
