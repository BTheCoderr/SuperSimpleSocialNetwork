import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});


export const signup = async (username, password, email) => {
  const response = await axiosInstance.post('/auth/signup', {
    username,
    password,
    email,
  });
  return response.data;
};

export const login = async (username, password) => {
  const response = await axiosInstance.post('/auth/login', {
    username,
    password,
  });
  return response.data;
};

export const getAllPosts = async () => {
  const response = await axiosInstance.get('/posts');
  return response.data;
};

export const getPostsByUser = async (userId) => {
  const response = await axiosInstance.get(`/posts/user/${userId}`);
  return response.data;
};

export const createPost = async (content) => {
  const response = await axiosInstance.post('/posts', { content });
  return response.data;
};

export const editPost = async (postId, content) => {
  const response = await axiosInstance.put('/posts', { postId, content });
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await axiosInstance.delete(`/posts/${postId}`);
  return response.data;
};

export const likePost = async (postId) => {
  const response = await axiosInstance.post(`/posts/${postId}/like`);
  return response.data;
};

export const dislikePost = async (postId) => {
  const response = await axiosInstance.post(`/posts/${postId}/dislike`);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post('/auth/logout');
  return response.data;
};
