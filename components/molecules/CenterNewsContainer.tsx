import { FunctionComponent } from "react";
import Image from "../atoms/image";
import Label from "../atoms/label";
import styles from "./CenterNewsContainer.module.scss";

interface CenterNewsContainerProps {
  news: any;
}

const CenterNewsContainer: FunctionComponent<CenterNewsContainerProps> = ({
  news,
}) => {
  console.log("center", news);

  return (
    <div className={styles.centerNewsContainer}>
      <div className={styles.headerWrapper}>
        <span className={styles.circle}></span>

        <Label value={news.name} className={styles.header} />
      </div>

      <div className={styles.largeNews}>
        <Image src={news.items[2].thumb} className="image-class" />
        <div className={styles.largeNewsTitle}>
          <Label value={news.items[2].headline} className="" />
        </div>
      </div>
    </div>
  );
};

export default CenterNewsContainer;
