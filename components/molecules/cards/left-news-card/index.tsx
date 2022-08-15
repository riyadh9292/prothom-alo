import { FunctionComponent } from "react";

interface LeftNewsCardProps {
  news: any;
}

const LeftNewsCard: FunctionComponent<LeftNewsCardProps> = ({ news }) => {
  console.log(news);

  return <div className="">{news.headline}</div>;
};

export default LeftNewsCard;
