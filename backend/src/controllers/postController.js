const { createPost, getAllPosts, getPostsByUser, deletePost } = require('../models/postModel');

const addPost = async (req, res) => {
  const { userId, content } = req.body;
  await createPost(userId, content);
  res.status(201).json({ message: 'Post created!' });
};

const fetchAllPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.status(200).json(posts);
};

const fetchPostsByUser = async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const posts = await getPostsByUser(userId);
  res.status(200).json(posts);
};

const deletePostHandler = async (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  await deletePost(postId);
  res.status(200).json({ message: 'Post deleted!' });
};

module.exports = { addPost, fetchAllPosts, fetchPostsByUser, deletePostHandler };
