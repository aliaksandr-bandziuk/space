import client from "client";
import { gql } from "@apollo/client";

import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { mapSocialIcons } from "./mapSocialIcons";

export const getPageStaticProps = async (context) => {
  console.log("CONTEXT: ", context)
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
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
        pages {
          nodes {
            id
            title
            uri
          }
        }
      }
    `,
    variables: {
      uri,
    }
  });
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  return {
    props: {
      pages: data.pages.nodes,
      seo: data.nodeByUri.seo,
      title: data.nodeByUri.title,
      logo: data.acfOptionsMainMenu.mainMenu.logo.sourceUrl,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      socialIcons: mapSocialIcons(
        data.acfOptionsMainMenu.mainMenu.socialIcons
      ),
      // callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      // callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      blocks,
    }
  };
};
