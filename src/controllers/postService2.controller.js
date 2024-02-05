const { updatePost } = require('../services/blogPosts2.services');
const { deletePost } = require('../services/blogPosts.services');
  
const updatePostController = async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  const userId = Number(req.user.id);

  try {
    // Verificar se todos os campos necessários estão presentes
    if (!title || !content) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const updatedPost = await updatePost(postId, { title, content }, userId);

    if (!updatedPost) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error in updatePostController:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePostController = async (req, res) => {
  const postId = req.params.id;
  const userId = Number(req.user.id);

  try {
    const result = await deletePost(postId, userId);

    if (result.data) {
      return res.status(result.status).json(result.data);
    }

    return res.sendStatus(result.status);
  } catch (error) {
    console.error('Error in deletePostController:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
module.exports = {
  updatePostController,
  deletePostController,
};