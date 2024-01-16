const jwt = require('jsonwebtoken');
const { createUser } = require('../services/user.services');
const { getAllUsers } = require('../services/user.services');
const userService = require('../services/user.services');

const { JWT_SECRET } = process.env;

const createUserController = async (req, res) => {
  const { status, data } = await createUser(req.body);
  if (data.message) return res.status(status).json(data);
  const payload = {
    id: data.id,
    email: data.email,
  };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1d',
  });
  return res.status(201).json({ token });
};

const getAllUsersController = async (_req, res) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
  getUserById,
};
