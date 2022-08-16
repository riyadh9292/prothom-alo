import { FunctionComponent } from "react";

interface CenterNewsCardProps {
  news: any;
}

const CenterNewsCard: FunctionComponent<CenterNewsCardProps> = ({ news }) => {
  console.log(news.thumb);

  return (
    <div className="">
      <img src={news.thumb} alt="" />
      {news.headline}
    </div>
  );
};

export default CenterNewsCard;
