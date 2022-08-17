import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import LeftNewsCard from "./cards/left-news-card";

interface LeftNewsContainerProps {
  leftNews: any;
  activeTab: "latest" | "mostread" | "discussed";
}

const LeftNewsContainer: FunctionComponent<LeftNewsContainerProps> = ({
  leftNews,
  activeTab,
}) => {
  const router = useRouter();
  const sorted = leftNews?.items?.sort((a: any, b: any) => a.sort - b.sort);

  return (
    <div className="">
      {sorted?.map((news: any, key: number) => (
        <LeftNewsCard
          onClick={() =>
            router.push({
              pathname: `/news/${news.id}`,
              query: { id: news.id, type: activeTab },
            })
          }
          key={key}
          news={news}
        />
      ))}
    </div>
  );
};

export default LeftNewsContainer;
