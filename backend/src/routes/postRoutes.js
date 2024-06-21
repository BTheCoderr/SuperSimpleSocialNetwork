const express = require('express');
const { addPost, fetchAllPosts, fetchPostsByUser, deletePostHandler } = require('../controllers/postController');
const { isAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/posts', isAuth, addPost);
router.get('/posts', fetchAllPosts);
router.get('/posts/user/:userId', fetchPostsByUser);
router.delete('/posts/:postId', isAuth, deletePostHandler);

module.exports = router;
