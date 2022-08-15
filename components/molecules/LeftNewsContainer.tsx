import { FunctionComponent } from "react";
import LeftNewsCard from "./cards/left-news-card";

interface LeftNewsContainerProps {
  leftNews: any;
}

const LeftNewsContainer: FunctionComponent<LeftNewsContainerProps> = ({
  leftNews,
}) => {
  //   console.log(leftNews?.items);

  return (
    <div className="">
      {leftNews?.items.map((news: any, key: number) => (
        <LeftNewsCard key={key} news={news} />
      ))}
    </div>
  );
};

export default LeftNewsContainer;
