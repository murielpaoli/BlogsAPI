const { deleteCurrentUser } = require('../services/user.services');

const deleteCurrentUserController = async (req, res) => {
  try {
    const userId = Number(req.user.id);

    const result = await deleteCurrentUser(userId);

    if (result.data) {
      return res.status(result.status).json(result.data);
    }

    return res.sendStatus(result.status);
  } catch (error) {
    console.error('Error in deleteCurrentUserController:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  deleteCurrentUserController,
};