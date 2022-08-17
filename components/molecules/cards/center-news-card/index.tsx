import { FunctionComponent } from "react";
import NewsTitle from "../../../atoms/news-title";
import styles from "./CenterNewsCard.module.scss";

interface CenterNewsCardProps {
  news: any;
  onClick: () => void;
  position: number;
}

const CenterNewsCard: FunctionComponent<CenterNewsCardProps> = ({
  news,
  onClick,
  position,
}) => {
  // console.log(position);

  return (
    <div
      onClick={onClick}
      className={`${
        position === 0
          ? styles.centerNewsCardWithRightLine
          : styles.centerNewsCard
      }`}
    >
      <img src={news.thumb} alt="" />
      <NewsTitle
        headline={news.sort + " " + news.headline}
        subheadline={news.subheadline}
        labelClassName={styles.label}
        subLabelclass={styles.bold}
      />
    </div>
  );
};

export default CenterNewsCard;
