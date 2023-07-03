import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

import { Pagination } from 'components/Pagination';

import styles from "./EducationPage.module.scss";

export const EducationPage = ({ educationPosts, featuredImage, postLimit }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Определяем индексы постов, которые будут отображаться на текущей странице
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = educationPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Функция для обработки изменения текущей страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };


  return (
    <>
      <div className={styles.categoryWrapper}>
        {currentPosts.map((post) => (
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
      <div>
        {educationPosts.length > postsPerPage && (
          <Pagination
            totalPages={Math.ceil(educationPosts.length / postsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            postLimit={postLimit}
          />
        )}
      </div>
    </>
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
