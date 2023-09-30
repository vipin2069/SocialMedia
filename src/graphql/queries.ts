// src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      text
      author {
        id
        username
      }
      // Other fields
    }
  }
`;

// Define other queries...
