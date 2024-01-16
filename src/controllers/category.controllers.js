const { categoryService } = require('../services');
const { getAllCategories } = require('../services/category.services');

const createCategorys = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const category = await categoryService.createCategory({ name });

    return res.status(201).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllCategoriesController = async (_req, res) => {
  try {
    const categories = await getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createCategorys,
  getAllCategoriesController,
};
