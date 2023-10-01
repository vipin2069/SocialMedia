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
    }
  }
`;
export const FOLLOW_USER = gql`
  mutation FollowUser($userId: ID!) {
    followUser(userId: $userId) {
      id
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation UnfollowUser($userId: ID!) {
    unfollowUser(userId: $userId) {
      id
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($text: String!, $image: Upload) {
    createPost(text: $text, image: $image) {
      id
      text
    }
  }
`;
