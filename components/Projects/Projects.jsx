import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Projects.module.scss'

export const Projects = ({ projectsPosts, featuredImage }) => {
  const limitedPosts = projectsPosts ? projectsPosts.slice(0, 4) : [];

  return (
    <div className={styles.categoryWrapper}>
      {limitedPosts.map((post) => (
        <div data-aos="fade-up" key={post.id} className={styles.categoryItem}>
          <Link href={post.uri}>
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
}

const getFormattedDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};