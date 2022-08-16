import { FunctionComponent } from "react";
import Label from "../../../atoms/label";
import styles from "./RightSideCard.module.scss";
interface RightSideCardProps {
  news: any;
}

const RightSideCard: FunctionComponent<RightSideCardProps> = ({ news }) => {
  return (
    <div className={styles.rightCardContainer}>
      <Label value={news.headline} className="" />
      <img src={news.thumb} alt="" />
    </div>
  );
};

export default RightSideCard;
