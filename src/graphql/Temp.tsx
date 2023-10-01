// src/components/SomeComponent.tsx

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, FOLLOW_USER, UNFOLLOW_USER, CREATE_POST } from './queries';

const Temp = () => {
  // Using a query
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts; // Use the data in your component

  // Using mutations
  const [followUser] = useMutation(FOLLOW_USER);
  const [unfollowUser] = useMutation(UNFOLLOW_USER);
  const [createPost] = useMutation(CREATE_POST);

  const handleFollowUser = (userId: string) => {
    followUser({ variables: { userId } })
      .then((response) => {
        // Handle success
      })
      .catch((error) => {
        // Handle error
      });
  };

  // Similar code for other mutations

  return (
    <div>
      {/* Render your component content here */}
    </div>
  );
};

export default Temp;
