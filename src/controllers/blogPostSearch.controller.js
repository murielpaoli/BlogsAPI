const { searchPosts } = require('../services/blogPostSearch.services');

const searchPostsController = async (req, res) => {
  try {
    const { q: searchTerm } = req.query;

    if (!searchTerm) {
      return res.status(400).json({ message: 'Search term is required' });
    }

    const { status, data } = await searchPosts(searchTerm);

    return res.status(status).json(data);
  } catch (error) {
    console.error('Error in searchPostsController:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  searchPostsController,
};