import { gql } from "../../.graphql";
import { GetTagToolsQuery, GetTagsQuery } from "../../.graphql/graphql";

export const getTagsQuery = gql(`
  query GetTags {
    tags {
      id
      name
      slug
    }
  }
`);

export const getTagToolsQuery = gql(`
  query GetTagTools($slug: String!) {
    tags(slug: $slug) {
      tools {
        description
        icon
        id
        name
        slug
        status
        website
        tag {
          name
          slug
          id
        }
        category {
          name
          slug
        }
      }
    }
  }
`);

export type Tags = NonNullable<GetTagsQuery["tags"]>;
export type TagTools = NonNullable<GetTagToolsQuery["tags"]>;
export type Tag = NonNullable<TagTools[number]>;
export type Tool = NonNullable<Tag["tools"]>;
