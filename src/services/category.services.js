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

module.exports = {
  createCategory,
};