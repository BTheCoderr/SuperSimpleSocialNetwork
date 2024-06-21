import React, { useEffect, useState } from 'react';
import { getPostsByUser } from '../services/api';
import PostList from '../components/PostList';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await getPostsByUser(userId);
    setPosts(response);
  };

  return (
    <div>
      <h1>User Page</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default UserPage;
