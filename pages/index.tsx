import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PublicLayout from "../components/layouts/PublicLayout";
import Header from "../components/organisms/header";
import MainFeatures from "../components/organisms/main-features";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Home.module.scss";

const Home: NextPage = (posts) => {
  // console.log(posts);

  return (
    // className={styles.container}
    <>
      <PublicLayout>
        <MainFeatures posts={posts} />
      </PublicLayout>
    </>
  );
};
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch("sample-datar5.json");
  // console.log(res);

  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: require(`./sample-datar5.json`),
    },
  };
}

export default Home;
