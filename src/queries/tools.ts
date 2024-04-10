import { gql } from "../../.graphql";
import { GetAllToolsQuery } from "../../.graphql/graphql";

export const getAllTools = gql(`
  query GetAllTools {
    tools {
      category {
        name
        id
        slug
      }
      description
      icon
      id
      name
      slug
      status
      tag {
        id
        name
        slug
      }
      website
    }
  }
`);

export type Tools = NonNullable<GetAllToolsQuery["tools"]>;
