import { BlockRenderer } from "components/BlockRenderer";
import { CommentsPosts } from "components/CommentsPosts";
import { EducationPosts } from "components/EducationPosts";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { Posts } from "components/Posts";
import Head from "next/head";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);

  let postLimit = 5; // Установите ограничение по умолчанию равным 5
  if (props.isNewsPage) {
    postLimit = 9; // Установите ограничение 15 на странице /news
  }

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
      <BlockRenderer blocks={props.blocks} />
      <Posts allPosts={props.allPosts} featuredImage={props.featuredImage} postLimit={postLimit} />
      <EducationPosts educationPosts={props.educationPosts} featuredImage={props.featuredImage} />
      <CommentsPosts commentsPosts={props.commentsPosts} featuredImage={props.featuredImage} />
      <Footer
        links={props.footerLinks}
        icons={props.footerSocialIcons}
        copyright={props.copyright}
        developerLabel={props.developerLabel}
        developerDestination={props.developerDestination}
        logo={props.logo}
      />
    </>
  )
}