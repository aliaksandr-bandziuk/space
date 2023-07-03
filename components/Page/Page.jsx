import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BlockRenderer } from "components/BlockRenderer";
import { CommentsPosts } from "components/CommentsPosts";
import { Contacts } from "components/Contacts";
import { EducationPosts } from "components/EducationPosts";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { Post } from "components/Post";
import { Posts } from "components/Posts";
import Head from "next/head";
import { Projects } from "components/Projects";
import { Events } from "components/Events";
import { NewsPage } from "components/NewsPage";
import { EducationPage } from "components/EducationPage";
import { ScrollToTopButton } from "components/ScrollToTopButton";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);

  let postLimit = 5; // Установите ограничение по умолчанию равным 5
  if (props.isNewsPage) {
    postLimit = 20; // Установите ограничение 15 на странице /news
  }

  let educationPostLimit = 5; // Установите ограничение по умолчанию равным 5
  // if (props.isEducationPage) {
  //   educationPostLimit = 9; // Установите ограничение 15 на странице /news
  // }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>{props.seo?.title}</title>
        <meta name="description" content={props.seo?.metaDesc} />
      </Head>
      <MainMenu
        items={props.mainMenuItems}
        logo={props.logo}
        icons={props.socialIcons}
      />
      {props.isPostPage &&
        <Post
          category={props.category}
          title={props.title}
          date={props.date}
          featuredImage={props.featuredImage}
        />
      }
      {props.isContactsPage &&
        <Contacts blocks={props.blocks} />
      }
      {!props.isContactsPage &&
        <BlockRenderer blocks={props.blocks} />
      }
      {props.isHomePage &&
        <>
          <Posts allPosts={props.allPosts} featuredImage={props.featuredImage} postLimit={postLimit} />
          <EducationPosts educationPosts={props.educationPosts} featuredImage={props.featuredImage} />
          <CommentsPosts data-aos="fade-up" commentsPosts={props.commentsPosts} featuredImage={props.featuredImage} />
          <Projects projectsPosts={props.projectsPosts} featuredImage={props.featuredImage} />
        </>
      }
      {props.isNewsPage &&
        <NewsPage allPosts={props.allPosts} featuredImage={props.featuredImage} postLimit={postLimit} />
      }
      {props.isEducationPage &&
        <EducationPage educationPosts={props.educationPosts} featuredImage={props.featuredImage} educationPostLimit={educationPostLimit} />
      }
      {props.isEventsPage &&
        <Events eventsPosts={props.eventsPosts} featuredImage={props.featuredImage} />
      }
      <Footer
        links={props.footerLinks}
        icons={props.footerSocialIcons}
        copyright={props.copyright}
        developerLabel={props.developerLabel}
        developerDestination={props.developerDestination}
        logo={props.logo}
      />
      <ScrollToTopButton />
    </>
  )
}