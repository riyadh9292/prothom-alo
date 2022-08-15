import { FunctionComponent } from "react";
import NewsTab from "../../molecules/NewsTab";

interface MainFeaturesProps {
  posts: any;
}

const MainFeatures: FunctionComponent<MainFeaturesProps> = () => {
  // console.log(posts);
  //   const { posts: allNews } = posts;
  const posts = require(`../../../pages/sample-datar5.json`);
  console.log(posts);

  return (
    <div className="">
      <NewsTab news={posts} />
    </div>
  );
};

export default MainFeatures;
