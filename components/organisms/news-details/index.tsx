import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import Label from "../../atoms/label";
import styles from "./NewsDetails.module.scss";

interface NewsDetailsProps {}

const NewsDetails: FunctionComponent<NewsDetailsProps> = () => {
  const router = useRouter();
  const { id, type } = router.query;

  const [singleNews, setSingleNews] = useState<any>();
  const getSingleNews = async (id: any, type: any) => {
    const list = await require("../../../pages/sample-datar5.json");

    const selectedList = await list[type]?.items.find(
      (item: any) => item.id == id
    );

    setSingleNews(selectedList);
  };

  useEffect(() => {
    getSingleNews(id, type);
  }, [id, type]);

  // console.log(singleNews?.descriptions);

  return (
    <div className={styles.descriptionWrapper}>
      <div className={styles.descriptionWrapper}>
        <Label value={singleNews?.subheadline} className={styles.gray} />
        <Label value={singleNews?.headline} className={styles.header} />
        <img src={singleNews?.thumb} alt="" srcSet="" />
        <div
          className={styles?.descriptions}
          dangerouslySetInnerHTML={{ __html: singleNews?.descriptions }}
        ></div>
      </div>
    </div>
  );
};

export default NewsDetails;
