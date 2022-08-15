import { FunctionComponent, useState } from "react";
import styles from "./NewsTab.module.scss";

interface NewsTabProps {
  news: any;
}

const NewsTab: FunctionComponent<NewsTabProps> = ({ news }) => {
  const [activeTab, setActiveTab] = useState<any>();
  useState(() => {
    setActiveTab(news?.latest?.name);
  }, []);
  console.log("news", activeTab);

  return (
    <div className={styles.tab}>
      <span
        className={`${activeTab === news?.latest?.name ? styles.active : ""}`}
        onClick={() => setActiveTab(news?.latest?.name)}
      >
        {news?.latest?.name}
      </span>
      <span
        className={`${activeTab === news?.mostread?.name ? styles.active : ""}`}
        onClick={() => setActiveTab(news?.mostread?.name)}
      >
        {news?.mostread?.name}
      </span>
      <span
        className={`${activeTab === news?.selected?.name ? styles.active : ""}`}
        onClick={() => setActiveTab(news?.selected?.name)}
      >
        {news?.selected?.name}
      </span>
    </div>
  );
};

export default NewsTab;
