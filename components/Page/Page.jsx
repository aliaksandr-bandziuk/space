import { BlockRenderer } from "components/BlockRenderer";
import { CommentsPosts } from "components/CommentsPosts";
import { EducationPosts } from "components/EducationPosts";
import { Footer } from "components/Footer";
import { MainMenu } from "components/MainMenu";
import { Posts } from "components/Posts";
import Head from "next/head";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);
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
      <Posts allPosts={props.allPosts} featuredImage={props.featuredImage} />
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