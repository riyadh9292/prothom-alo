import { FunctionComponent } from "react";
import Label from "../atoms/label";
import RightSideCard from "./cards/right-side-card";
import styles from "./RightNewsContainer.module.scss";

interface RighrNewsContainerProps {
  news: any;
}

const RighrNewsContainer: FunctionComponent<RighrNewsContainerProps> = ({
  news,
}) => {
  console.log(news);

  return (
    <div className={styles.rightNewsWrapper}>
      {news.map((n: any, key: number) => (
        <RightSideCard news={n} key={key} />
      ))}
    </div>
  );
};

export default RighrNewsContainer;
