import client from "client";
import { gql } from "@apollo/client";

import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { mapSocialIcons } from "./mapSocialIcons";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const educationId = 9; // Замените на идентификатор нужной вам категории
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!, $educationId: Int) {
        nodeByUri(uri: $uri) {
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
                imageLabel {
                  sourceUrl
                }
              }
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
      }
    `,
    variables: {
      uri,
      educationId,
    },
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  const isHomePage = uri === "/";
  const allPosts = isHomePage ? data.allPosts.nodes : [];
  const educationPosts = isHomePage ? data.educationPosts.nodes : [];

  return {
    props: {
      seo: data.nodeByUri.seo || null,
      title: data.nodeByUri.title || null,
      logo: data.acfOptionsMainMenu.mainMenu.logo.sourceUrl,
      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      socialIcons: mapSocialIcons(data.acfOptionsMainMenu.mainMenu.socialIcons),
      blocks,
      allPosts, // Все записи
      educationPosts, // Записи определенной категории
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
    },
  };
};