import { FunctionComponent } from "react";
import Label from "../../../atoms/label";
import styles from "./LeftNews.module.scss";

interface LeftNewsCardProps {
  news: any;
}

const LeftNewsCard: FunctionComponent<LeftNewsCardProps> = ({ news }) => {
  console.log("left news", news);
  // const sorte

  return (
    <div className={styles.cardContainer}>
      <Label value={news.sort} className={styles.number} />
      <div className={styles.headlineContainer}>
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
      </div>
    </div>
  );
};

export default LeftNewsCard;
