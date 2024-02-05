const db = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  try {
    if (password.length < 6) { 
      return { 
        status: 400, data: '"password" length must be at least 6 characters long' }; 
    }
    if (displayName.length < 8) { 
      return { 
        status: 400, data: '"displayName" length must be at least 8 characters long' }; 
    }
    const response = await db.User.create({ displayName, email, password, image });
    return { status: 201, data: response };
  } catch (error) {
    console.error('Error in userService:', error);
    return { status: 500, data: 'Internal Server Error' };
  }
};

const getAllUsers = async () => {
  try {
    const userFind = await db.User.findAll({ attributes: { exclude: ['password'] } });
    return { status: 200, data: userFind };
  } catch (error) {
    console.error('Error retrieving users:', error);
    return { status: 500, data: 'Internal Server Error' };
  }
};

const getUserById = async (id) => {
  const userFindId = await db.User
    .findOne({ where: id, attributes: { exclude: ['password'] } });
  return { status: 200, data: userFindId };
};

const deleteCurrentUser = async (userId) => {
  const user = await db.User.findOne({
    where: { id: userId },
  });

  if (!user) {
    return { status: 404, data: { message: 'User does not exist' } };
  }

  await user.destroy();

  return { status: 204 };
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteCurrentUser,
};
