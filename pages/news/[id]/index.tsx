import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PublicLayout from "../../../components/layouts/PublicLayout";
import NewsDetails from "../../../components/organisms/news-details";
// import PublicLayout from "../components/layouts/PublicLayout";

// import MainFeatures from "../components/organisms/main-features";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Home.module.scss";

const SingleNews: NextPage = (posts) => {
  // console.log(posts);

  return (
    // className={styles.container}
    <>
      <PublicLayout>
        <NewsDetails />
      </PublicLayout>
    </>
  );
};
export default SingleNews;
