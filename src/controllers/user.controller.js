const jwt = require('jsonwebtoken');
const { createUser, getAllUsers, getUserById } = require('../services/user.services');

const key = process.env.JWT_SECRET || 'yourSecretToken';

const createUserController = async (req, res) => {
  try {
    const { status, data } = await createUser(req.body);  
    
    if (status === 400) return res.status(status).json({ message: data });
    const payload = {
      id: data.id,
      email: data.email,
    };
    const token = jwt.sign(payload, key, {
      expiresIn: '7d',
    });
    return res.status(status).json({ token });
  } catch (error) {
    console.error('Error in userController:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllUsersController = async (_req, res) => {
  try {
    const { status, data } = await getAllUsers();
    if (data.length === 0) {
      return res.status(status).json({ message: 'No users found' });
    }
    res.status(status).json(data);
  } catch (error) {
    console.error('Error retrieving users:', error);

    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const userControllerFindById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await getUserById({ id });
    if (data.length === 0) {
      return res.status(status).json({ message: 'User does not exist' });
    }
    res.status(status).json(data);
  } catch (error) {
    console.error('Error retrieving users:', error);

    res.status(404).json({ message: 'User does not exist' });
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
  userControllerFindById,
};
