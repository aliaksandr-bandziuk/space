import Image from 'next/image';
import React from 'react'

import styles from './Post.module.scss';

export const Post = (props) => {

  return (
    <>
      <div className={styles.containerTop}>
        <div className={styles.postCategory}>{props.category}</div>
        <h1 className={styles.postHeader}>{props.title}</h1>
        <p className={styles.postDate}>{getFormattedDate(props.date)}</p>
        {props.featuredImage && (
          <div className={styles.imageContainer}>
            <Image
              src={props.featuredImage}
              width={1000}
              height={600}
              alt={props.title}
              className={styles.postImage}
            />
          </div>
        )}
      </div>
    </>
  )
}

const getFormattedDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};