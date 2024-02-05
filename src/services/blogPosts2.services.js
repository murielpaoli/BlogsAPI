const { BlogPost, User, Category } = require('../models');

const updatePostFields = async (post, newData) => {
  await post.update({
    title: newData.title,
    content: newData.content,
    updated: new Date(),
  });
};

const reloadUpdatedPost = async (post) => {
  await post.reload({
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
};

const updatePost = async (postId, newData, userId) => {
  const post = await BlogPost.findOne({
    where: { id: postId, userId },
  });

  if (!post) {
    return null; // Post não encontrado para o usuário
  }

  await updatePostFields(post, newData);
  await reloadUpdatedPost(post);

  return post;
};

module.exports = {
  updatePost,
};