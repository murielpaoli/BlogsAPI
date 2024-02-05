const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');
const config = require('../config/config');
const { validatePost } = require('../middlewares/validatePost');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const createPost = async (body, userId) => {
  const t = await sequelize.transaction();

  try {
    const error = await validatePost(body);
    if (error) return { status: 400, data: { message: error.message } };
    const { title, content } = body;
    const updated = new Date();
    const published = new Date();
    const post = await BlogPost
      .create({ title, content, userId, updated, published }, { transaction: t });
    await body.categoryIds.map(async (category) => 
      PostCategory.create({ postId: post.id, categoryId: category }), { transaction: t });
    await t.commit();
    return { status: 201, data: post };
  } catch (e) {
    await t.rollback();
    return { status: 500, data: { message: 'Algo deu errado' } };
  }
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({ include: [{ 
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  }, { model: Category, as: 'categories',
  }] });

  return { status: 200, data: posts };
};

module.exports = {
  createPost,
  getAllPosts,
};