import client from "client";
import { gql } from "@apollo/client";

import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri,
            title
          }
        }
        posts {
          nodes {
            id
            title
            uri
            date
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `,
  });

  return {
    paths: [...data.pages.nodes, ...data.posts.nodes].filter(page => page.uri !== "/").map((page) => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split("/"),
      },
    })),
    fallback: "blocking",
  }
}