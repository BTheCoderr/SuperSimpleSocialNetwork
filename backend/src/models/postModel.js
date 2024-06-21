const pool = require('../utils/db');

const createPost = async (userId, content) => {
  const [rows] = await pool.query('INSERT INTO Posts (user_id, content) VALUES (?, ?)', [userId, content]);
  return rows;
};

const getAllPosts = async () => {
  const [rows] = await pool.query('SELECT * FROM Posts ORDER BY created_at DESC');
  return rows;
};

const getPostsByUser = async (userId) => {
  const [rows] = await pool.query('SELECT * FROM Posts WHERE user_id = ? ORDER BY created_at DESC', [userId]);
  return rows;
};

const deletePost = async (postId) => {
  const [rows] = await pool.query('DELETE FROM Posts WHERE id = ?', [postId]);
  return rows;
};

module.exports = { createPost, getAllPosts, getPostsByUser, deletePost };
