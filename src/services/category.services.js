const connection = require('../models');

const createCategory = async (name) => {
  try {
    const createdCategory = await connection.Category.create({ name });
    return createdCategory;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

const getAllCategories = async (name) => {
  try {
    const category = await connection.Category
      .findAll({ where: name });
    return category;
  } catch (error) {
    console.error('Error retrieving category:', error);
    throw error;
  }
};

const categoryIdService = async (id) => connection.Category.findOne({ where: { id } });

module.exports = {
  createCategory,
  getAllCategories,
  categoryIdService,
};