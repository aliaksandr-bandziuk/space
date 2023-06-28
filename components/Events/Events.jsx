import Image from 'next/image';
import Link from "next/link";

import styles from "./Events.module.scss";

export const Events = ({ eventsPosts, featuredImage }) => {
  const limitedPosts = eventsPosts ? eventsPosts.slice(0, 5) : [];

  return (
    <div className={styles.categoryWrapper}>
      {limitedPosts.map((post) => (
        <div key={post.id} className={styles.categoryItem}>
          <Link data-aos="fade-up" href={post.uri} className={styles.item}>
            <div className={styles.imageContainer}>
              {post.featuredImage?.node?.sourceUrl ? (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  width={1000}
                  height={1500}
                  className={styles.image}
                  alt={post.title}
                />
              ) : (
                <Image
                  src="/no-image.jpg"
                  width={1000}
                  height={1500}
                  className={styles.image}
                  alt={post.title}
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
}
