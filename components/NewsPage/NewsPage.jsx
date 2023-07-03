import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./NewsPage.module.scss";
import { Pagination } from "components/Pagination";

export const NewsPage = ({ allPosts, featuredImage, postLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Определяем индексы постов, которые будут отображаться на текущей странице
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const lastPost = currentPosts[0]; // Получаем последнюю запись

  // Функция для обработки изменения текущей страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const getFormattedDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div data-aos="fade-up" className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.gridItemLarge} ${lastPost ? styles.mainPhoto : ''}`}>
          {lastPost && (
            <Link href={lastPost.uri} key={lastPost.id}>
              <div className={styles.imageContainer}>
                {lastPost.featuredImage?.node?.sourceUrl ? (
                  <Image
                    src={lastPost.featuredImage.node.sourceUrl}
                    width={1000}
                    height={600}
                    className={styles.imageLast}
                    alt={lastPost.title}
                  />
                ) : (
                  <div className={styles.noImage}>No Image Available</div>
                )}
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

        {currentPosts.slice(1).map((post) => (
          <div key={post.id} className={styles.gridItem}>
            <Link href={post.uri}>
              <div className={styles.imageContainer}>
                {post.featuredImage?.node?.sourceUrl ? (
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    width={1000}
                    height={600}
                    className={styles.image}
                    alt={post.title}
                  />
                ) : (
                  <Image
                    src="/no-image.jpg"
                    width={1000}
                    height={600}
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
        {allPosts.length > postsPerPage && (
          <Pagination
            totalPages={Math.ceil(allPosts.length / postsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            postLimit={postLimit}
          />
        )}
      </div>
    </>
  );
};