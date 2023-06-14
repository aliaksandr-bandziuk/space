import { BlockRenderer } from "components/BlockRenderer";
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
      <Posts posts={props.posts} featuredImage={props.featuredImage} />
    </>
  )
}