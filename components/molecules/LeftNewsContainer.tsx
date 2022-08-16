import { FunctionComponent } from "react";
import LeftNewsCard from "./cards/left-news-card";

interface LeftNewsContainerProps {
  leftNews: any;
}

const LeftNewsContainer: FunctionComponent<LeftNewsContainerProps> = ({
  leftNews,
}) => {
  //   console.log(leftNews?.items);
  const sorted = leftNews.items.sort((a: any, b: any) => a.sort - b.sort);

  return (
    <div className="">
      {sorted.map((news: any, key: number) => (
        <LeftNewsCard key={key} news={news} />
      ))}
    </div>
  );
};

export default LeftNewsContainer;
