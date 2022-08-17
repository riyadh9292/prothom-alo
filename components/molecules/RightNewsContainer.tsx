import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import Label from "../atoms/label";
import RightSideCard from "./cards/right-side-card";
import styles from "./RightNewsContainer.module.scss";

interface RightNewsContainerProps {
  news: any;
}

const RightNewsContainer: FunctionComponent<RightNewsContainerProps> = ({
  news,
}) => {
  const router = useRouter();

  return (
    <div className={styles.rightNewsWrapper}>
      {news.map((n: any, key: number) => (
        <RightSideCard
          onClick={() =>
            router.push({
              pathname: `/news/${n.id}`,
              query: { id: n.id, type: "selected" },
            })
          }
          news={n}
          key={key}
        />
      ))}
    </div>
  );
};

export default RightNewsContainer;
