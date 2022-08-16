import { FunctionComponent } from "react";
import Label from "../../../atoms/label";
import NewsTitle from "../../../atoms/news-title";
import styles from "./RightSideCard.module.scss";
import labelStyles from "../center-news-card/CenterNewsCard.module.scss";
interface RightSideCardProps {
  news: any;
}

const RightSideCard: FunctionComponent<RightSideCardProps> = ({ news }) => {
  return (
    <div className={styles.rightCardContainer}>
      <div className={styles.imageWrapper}>
        <NewsTitle
          headline={news.sort + " " + news.headline}
          subheadline={news.subheadline}
          subLabelclass={labelStyles.label}
          labelClassName={labelStyles.bold}
        />
      </div>
      {/* <Label value={news.headline} className="" /> */}
      <img src={news.thumb} alt="" />
    </div>
  );
};

export default RightSideCard;
