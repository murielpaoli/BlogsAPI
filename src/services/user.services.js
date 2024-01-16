const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  if (displayName.length < 8) {
    return { 
      status: 400,
      data: { message: '"displayName" length must be at least 8 characters long' } };    
  }
  if (password.length < 6) {
    return { 
      status: 400,
      data: { message: '"password" length must be at least 6 characters long' } }; 
  }
  const user = await User.create({ displayName, email, password, image });
  return { status: 201, data: user };
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
