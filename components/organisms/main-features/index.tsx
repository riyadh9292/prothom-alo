import { FunctionComponent } from "react";
import CenterNewsContainer from "../../molecules/CenterNewsContainer";
import NewsTab from "../../molecules/NewsTab";
import RighrNewsContainer from "../../molecules/RightNewsContainer";
import styles from "./MainFeatures.module.scss";

interface MainFeaturesProps {
  posts: any;
}

const MainFeatures: FunctionComponent<MainFeaturesProps> = () => {
  // console.log(posts);
  //   const { posts: allNews } = posts;
  const posts = require(`../../../pages/sample-datar5.json`);
  // console.log(posts);

  return (
    <div className={styles.mainFeatures}>
      <aside>
        <NewsTab news={posts} />
      </aside>

      <div className={styles.selected}>
        <CenterNewsContainer news={posts["selected"]} />
      </div>
      {/*  */}
    </div>
  );
};

export default MainFeatures;
