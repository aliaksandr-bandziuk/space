import Image from "next/image";
import Link from "next/link";

import styles from "./Posts.module.scss";

export const Posts = ({ posts, featuredImage }) => {
  console.log("POSTS:", posts);
  const limitedPosts = posts.slice(0, 5);
  const lastPost = limitedPosts[0]; // Получаем последнюю запись

  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.gridItem} ${styles.gridItemLarge} ${lastPost ? styles.mainPhoto : ''}`}>
        {lastPost && (
          <Link href={lastPost.uri} key={lastPost.id}>
            <div className={styles.imageContainer}>
              <Image
                src={lastPost.featuredImage?.node?.sourceUrl || featuredImage}
                width={1000}
                height={600}
                className={styles.image}
            />
            </div>
            <div className={styles.postContent}>
              <div className={styles.category}>{lastPost.categories.nodes[0]?.name}</div>
              <div className={styles.contentData}>
                <h3 className={styles.cardLastTitle}>{lastPost.title}</h3>
                <p className={styles.date}>{getFormattedDate(lastPost.date)}</p>
              </div>
            </div>
          </Link>
        )}
      </div>

      {limitedPosts.slice(1).map((post) => (
        <div key={post.id} className={styles.gridItem}>
          <Link href={post.uri}>
            <div className={styles.imageContainer}>
              <Image
                src={post.featuredImage?.node?.sourceUrl || featuredImage}
                width={1000}
                height={600}
                className={styles.image}
              />
            </div>
            <div className={styles.postContent}>
              <div className={styles.category}>{post.categories.nodes[0]?.name}</div>
              <div className={styles.contentData}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.date}>{getFormattedDate(lastPost.date)}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

const getFormattedDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
