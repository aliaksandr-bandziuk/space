import client from "client";
import { gql } from "@apollo/client";

import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { mapSocialIcons } from "./mapSocialIcons";
import { mapFooterSocialIcons } from "./mapFooterSocialIcons";
import { mapFooterLinks } from "./mapFooterLinks";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const educationId = 9;
  const commentsId = 11;
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!, $educationId: Int, $commentsId: Int) {
        nodeByUri(uri: $uri) {
          __typename
          ... on Page {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Post {
            id
            title
            date
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            logo {
              sourceUrl
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
            socialIcons {
              socialIcon {
                destination {
                  url
                }
                label
              }
            }
          }
        }
        acfOptionsFooter {
          footer {
            copyright
            developer {
              destination {
                url
              }
              label
            }
            footerLinks {
              footerLink {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
            footerSocialIcons {
              footerSocialIcon {
                destination {
                  url
                }
                label
              }
            }
            footerLogo {
              sourceUrl
            }
          }
        }
        allPosts: posts {
          nodes {
            id
            title
            uri
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
        educationPosts: posts(where: { categoryId: $educationId }) {
          nodes {
            id
            title
            uri
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
        commentsPosts: posts(where: { categoryId: $commentsId }) {
          nodes {
            id
            title
            uri
            date
            excerpt(format: RENDERED)
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `,
    variables: {
      uri,
      educationId,
      commentsId,
    },
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  const isHomePage = uri === "/";
  const isHomePageOrNews = uri === "/" || uri === "/news/";
  const isHomePageOrEducation = uri === "/" || uri === "/news/education/";
  const allPosts = isHomePageOrNews ? data.allPosts.nodes : [];
  const educationPosts = isHomePageOrEducation ? data.educationPosts.nodes : [];
  const commentsPosts = isHomePage ? data.commentsPosts.nodes : [];

  const isPostPage = data.nodeByUri.__typename === "Post";

  return {
    props: {
      seo: data.nodeByUri.seo || null,
      title: data.nodeByUri.title || null,
      date: data.nodeByUri.date || null,
      logo: data.acfOptionsMainMenu.mainMenu.logo.sourceUrl,
      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      socialIcons: mapSocialIcons(data.acfOptionsMainMenu.mainMenu.socialIcons),
      copyright: data.acfOptionsFooter.footer.copyright,
      developerLabel: data.acfOptionsFooter.footer.developer.label,
      developerDestination: data.acfOptionsFooter.footer.developer.destination.url,
      footerLinks: mapFooterLinks(data.acfOptionsFooter.footer.footerLinks),
      footerSocialIcons: mapFooterSocialIcons(data.acfOptionsFooter.footer.footerSocialIcons),
      blocks,
      allPosts, // Все записи
      educationPosts,
      commentsPosts,
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || data.nodeByUri.featuredImage?.sourceUrl || null,
      isNewsPage: context.params?.slug?.[0] === "news", // Проверяем, является ли текущая страница страницей /news
      isEducationPage: context.params?.slug?.[0] === "news/education",
      isPostPage: isPostPage
    },
  };
};
