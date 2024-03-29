import { gql } from "../../.graphql";
import { GetCategoriesQuery, GetCategoriesToolsQuery } from "../../.graphql/graphql";

export const getCategoriesQuery = gql(`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`);

export const getCategoryTools = gql(`
  query GetCategoriesTools($slug: String!) {
    categories(slug: $slug) {
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

export type Categories = NonNullable<GetCategoriesQuery["categories"]>;
export type CategoriesTools = NonNullable<GetCategoriesToolsQuery["categories"]>;
export type Category = NonNullable<CategoriesTools[number]>;
export type Tools = NonNullable<Category["tools"]>;
