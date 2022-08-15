import { FunctionComponent } from "react";

interface ImageProps {
  src: any;
  className: string;
}

const Image: FunctionComponent<ImageProps> = ({ src, className }) => {
  return <img src={src} className={className} alt="" />;
};

export default Image;
