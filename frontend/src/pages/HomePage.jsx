import React, { useEffect, useState } from 'react';
import { getAllPosts, likePost, dislikePost, deletePost } from '../services/api';
import PostForm from '../components/PostForm';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      await likePost(postId);
      fetchPosts();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDislike = async (postId) => {
    try {
      await dislikePost(postId);
      fetchPosts();
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <PostForm onPostCreated={fetchPosts} />
      {posts.length > 0 ? (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <p>{post.content}</p>
              <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
              <button onClick={() => handleDislike(post.id)}>Dislike ({post.dislikes})</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default HomePage;
