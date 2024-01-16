const userMiddlewares = require('./validateUserFields');
const authMiddlewares = require('./authMiddleware');

module.exports = {
  userMiddlewares,
  authMiddlewares,
};