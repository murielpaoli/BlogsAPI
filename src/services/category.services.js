const { Category } = require('../models');

const createCategory = async ({ name }) => {
  try {
    const category = await Category.create({ name });
    return category;
  } catch (error) {
    console.error(error);
    throw error; // Rejeita a promessa se ocorrer um erro
  }
};

const getAllCategories = async () => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });
    return categories;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};