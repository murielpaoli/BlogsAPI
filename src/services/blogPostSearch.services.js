/* const { Op } = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');

// ... (seu código existente)

const searchPosts = async (searchTerm) => {
  try {
    const posts = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${searchTerm}%` } }, // Case-insensitive LIKE query for title
          { content: { [Op.iLike]: `%${searchTerm}%` } }, // Case-insensitive LIKE query for content
        ],
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
        },
      ],
    });

    return { status: 200, data: posts };
  } catch (error) {
    console.error('Error searching posts:', error);
    return { status: 500, data: { message: 'Internal Server Error' } };
  }
};

module.exports = {
  // ... (seu código existente)
  searchPosts,
}; */
