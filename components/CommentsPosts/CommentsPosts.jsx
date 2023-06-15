import Image from 'next/image';
import Link from "next/link";

import styles from "./CommentsPosts.module.scss";

export const CommentsPosts = ({ commentsPosts, featuredImage }) => {
  console.log("POSTS:", commentsPosts);

  const limitedPosts = commentsPosts ? commentsPosts.slice(0, 5) : [];

  return (
    <div className={styles.categoryWrapper}>
      {limitedPosts.map((post) => (
        <div key={post.id} className={styles.categoryItem}>
          <Link href={post.uri} className={styles.item}>
            <div className={styles.imageContainer}>
              {post.featuredImage?.node?.sourceUrl ? (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  width={1000}
                  height={1500}
                  className={styles.image}
                />
              ) : (
                <Image
                  src="/no-image.jpg"
                  width={1000}
                  height={1500}
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.postContent}>
              <div className={styles.postItems}>
                <div className={styles.category}>{post.categories.nodes[0]?.name}</div>
                <div className={styles.contentData}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt.replace(/<p>/g, '').replace(/<\/p>/g, '')}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
