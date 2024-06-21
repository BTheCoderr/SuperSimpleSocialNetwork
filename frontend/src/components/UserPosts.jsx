import React from 'react';
import Post from './Post';

const UserPosts = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

export default UserPosts;
