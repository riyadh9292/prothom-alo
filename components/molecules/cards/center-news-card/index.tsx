import { FunctionComponent } from "react";
import NewsTitle from "../../../atoms/news-title";
import styles from "./CenterNewsCard.module.scss";

interface CenterNewsCardProps {
  news: any;
  onClick: () => void;
}

const CenterNewsCard: FunctionComponent<CenterNewsCardProps> = ({
  news,
  onClick,
}) => {
  console.log(news.thumb);

  return (
    <div onClick={onClick} className="">
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
