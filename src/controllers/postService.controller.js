const { insertPost } = require('../services/blogPost.services');
const { getAllPosts, getPostById } = require('../services/blogPosts.services');

const createPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = Number(req.user.id);

  try {
    const newPost = await insertPost({ 
      title, 
      content,
      categoryIds,
      userId,
    });

    return res.status(201).json(newPost);
  } catch (error) {
    console.error('Error in createPostController:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();

    return res.status(200).json(posts);
  } catch (error) {
    console.error('Error in getAllPostsController:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPostByIdController = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await getPostById(postId);

    if (post) {
      return res.status(200).json(post);
    }

    return res.status(404).json({ message: 'Post does not exist' });
  } catch (error) {
    console.error('Error in getPostByIdController:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createPostController,
  getAllPostsController,
  getPostByIdController,
};