
import { gql } from '@apollo/client';

export const FOLLOW_USER = gql`
  mutation FollowUser($userId: ID!) {
    followUser(userId: $userId) {
      id
      // Other user fields
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation UnfollowUser($userId: ID!) {
    unfollowUser(userId: $userId) {
      id
      // Other user fields
    }
  }
`;
export const CREATE_POST = gql`
  mutation CreatePost($text: String!, $image: Upload) {
    createPost(text: $text, image: $image) {
      id
      text
      // Other fields
    }
  }
`;