import { FunctionComponent, useState } from "react";
import Button from "../atoms/button";
import LeftNewsContainer from "./LeftNewsContainer";
import styles from "./NewsTab.module.scss";

interface NewsTabProps {
  news: any;
}

const NewsTab: FunctionComponent<NewsTabProps> = ({ news }) => {
  const [activeTab, setActiveTab] = useState<
    "latest" | "mostread" | "selected"
  >();

  useState(() => {
    setActiveTab("latest");
  }, []);
  // console.log("news", news["discussed"]);

  return (
    <div className={styles.tab}>
      <div>
        <Button
          className={`${activeTab === "latest" ? styles.active : ""}`}
          onClick={() => setActiveTab("latest")}
          value={news?.latest?.name}
        />
        <Button
          className={`${activeTab === "mostread" ? styles.active : ""}`}
          onClick={() => setActiveTab("mostread")}
          value={news?.mostread?.name}
        />
        <Button
          className={`${activeTab === "selected" ? styles.active : ""}`}
          onClick={() => setActiveTab("selected")}
          value={news?.selected?.name}
        />
        <div className=""></div>
      </div>
      <div className="">
        <LeftNewsContainer leftNews={news[`${activeTab}`]} />
      </div>
    </div>
  );
};

export default NewsTab;
