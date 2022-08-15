import { FunctionComponent } from "react";

interface LabelProps {
  value: any;
  className: string;
}

const Label: FunctionComponent<LabelProps> = ({ value, className }) => {
  return <p className={className}>{value}</p>;
};

export default Label;
