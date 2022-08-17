import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import Image from "../atoms/image";
import Label from "../atoms/label";
import NewsTitle from "../atoms/news-title";
import CenterNewsCard from "./cards/center-news-card";
import styles from "./CenterNewsContainer.module.scss";
import RightNewsContainer from "./RightNewsContainer";

interface CenterNewsContainerProps {
  news: any;
}

const CenterNewsContainer: FunctionComponent<CenterNewsContainerProps> = ({
  news,
}) => {
  const router = useRouter();
  const sorted = news.items.sort((a: any, b: any) => a.sort - b.sort);

  return (
    <div className={styles.centerNewsContainer}>
      <div className={styles.selectedNewsWrapper}>
        <div className={styles.selectedNews}>
          <div className={styles.headerWrapper}>
            <span className={styles.circle}></span>

            <Label value={news.name} className={styles.header} />
          </div>

          <div className={styles.largeNews}>
            <div
              onClick={() =>
                router.push({
                  pathname: `/news/${sorted[0].id}`,
                  query: { id: sorted[0].id, type: "selected" },
                })
              }
              className=""
            >
              <Image src={sorted[0].thumb} className={styles.thumb} />
              <div className={styles.largeNewsTitle}>
                <div className="">
                  <NewsTitle
                    headline={sorted[0].sort + " " + sorted[0].headline}
                    subheadline={sorted[0].subheadline}
                    labelClassName={
                      !sorted[0].subheadline
                        ? styles.yellow + " " + styles.bold
                        : styles.labelClass
                    }
                    subLabelclass={styles.yellow + " " + styles.bold}
                  />
                </div>
              </div>
            </div>

            <div className={styles.centerCards}>
              {sorted.slice(1, 3).map((n: any, key: number) => (
                <CenterNewsCard
                  onClick={() =>
                    router.push({
                      pathname: `/news/${n.id}`,
                      query: { id: n.id, type: "selected" },
                    })
                  }
                  news={n}
                  key={key}
                  position={key}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.advertise}>
          <Label value={"বিজ্ঞাপন"} className={styles.header} />
          {/* posts["selected"] */}
          <div className={styles.adOne}>
            <span>AD-1</span>
          </div>

          <div className={styles.rightNewsContainer}>
            <RightNewsContainer news={sorted.slice(3)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNewsContainer;
