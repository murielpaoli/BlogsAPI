const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
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

  return posts;
};

const getPostById = async (postId) => {
  const post = await BlogPost.findOne({
    where: { id: postId },
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

  return post;
};

const deletePost = async (postId, userId) => {
  const post = await BlogPost.findOne({
    where: { id: postId },
  });

  if (!post) {
    return { status: 404, data: { message: 'Post does not exist' } };
  }

  if (post.userId !== userId) {
    return { status: 401, data: { message: 'Unauthorized user' } };
  }

  await post.destroy();
  return { status: 204 };
};
module.exports = {
  getAllPosts,
  getPostById,
  deletePost,
};
