import Image from "next/image";
import Link from "next/link";

import styles from "./EducationPosts.module.scss";

export const EducationPosts = ({ educationPosts, featuredImage }) => {
  console.log("POSTS:", educationPosts);

  return (
    <div className={styles.categoryWrapper}>
      {educationPosts.map((post) => (
        <div key={post.id} className={styles.categoryItem}>
          <Link href={post.uri}>
            <div className={styles.imageContainer}>
              <Image
                src={post.featuredImage?.node?.sourceUrl || featuredImage}
                width={1000}
                height={1500}
                className={styles.image}
              />
            </div>
            <div className={styles.postContent}>
              <div className={styles.category}>{post.categories.nodes[0]?.name}</div>
              <div className={styles.contentData}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.date}>{getFormattedDate(post.date)}</p>
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
