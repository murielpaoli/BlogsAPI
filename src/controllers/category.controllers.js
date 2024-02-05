const { createCategory, getAllCategories } = require('../services/category.services');

const createCategorys = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const category = await createCategory(name);

    return res.status(201).json(category);
  } catch (error) {
    console.error('Error retrieving category:', error);

    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllCategoriesController = async (req, res) => {
  const { name } = req.body;

  try {
    const newCat = await getAllCategories(name);

    if (!newCat) {
      return res.status(500).json({ message: 'Error creating category' });
    }

    res.status(200).json(newCat);
  } catch (error) {
    console.error('Error creating category:', error);

    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createCategorys,
  getAllCategoriesController,
};
