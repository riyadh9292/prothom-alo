import { FunctionComponent } from "react";
import Label from "../atoms/label";
import styles from "./RightNewsContainer.module.scss";

interface RighrNewsContainerProps {
  news: any;
}

const RighrNewsContainer: FunctionComponent<RighrNewsContainerProps> = ({
  news,
}) => {
  //   console.log(news);

  return (
    <div className={styles.rightNewsWrapper}>
      <Label value={"বিজ্ঞাপন"} className={styles.header} />
    </div>
  );
};

export default RighrNewsContainer;
