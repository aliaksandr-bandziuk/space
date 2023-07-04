import React from "react";

import styles from "./NotFoundPage.module.scss";
import Link from "next/link";
import { MainMenu } from "components/MainMenu";
import { Footer } from "components/Footer";

export const NotFoundPage = (props) => {

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>404 - Page not found</h1>
        <p className={styles.text}>This page is not exist</p>
        <Link href="/" className={styles.link}>Go back to Homepage</Link>
      </div>
    </>
  );
};