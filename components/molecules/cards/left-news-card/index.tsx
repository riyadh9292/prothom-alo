import { FunctionComponent } from "react";
import Label from "../../../atoms/label";
import NewsTitle from "../../../atoms/news-title";
import styles from "./LeftNews.module.scss";

interface LeftNewsCardProps {
  news: any;
  onClick: () => void;
}

const LeftNewsCard: FunctionComponent<LeftNewsCardProps> = ({
  news,
  onClick,
}) => {
  // const sorte

  return (
    <div onClick={onClick} className={styles.cardContainer}>
      <Label value={news.sort} className={styles.number} />
      <NewsTitle headline={news.headline} subheadline={news.subheadline} />
      {/* <div className={styles.headlineContainer}>
        <Label
          value={news.headline}
          className={styles.headline + news.subheadline && styles.red}
        />
        {news.subheadline && (
          <>
            <Label
              value={"  / " + news.subheadline}
              className={styles.subheadline}
            />
          </>
        )}
      </div> */}
    </div>
  );
};

export default LeftNewsCard;
