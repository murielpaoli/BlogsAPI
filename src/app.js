const express = require('express');
const loginController = require('./controllers/login');
const { userMiddlewares, authMiddlewares } = require('./middlewares');
const { userControllers, categoryControllers } = require('./controllers');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController.loginController);
app.post('/user', userMiddlewares.validateUserFields, userControllers.createUserController);
app.get('/user', authMiddlewares.authenticateToken, userControllers.getAllUsersController);
app.get('/user/:id', authMiddlewares.authenticateToken, userControllers.getUserById);
app.post('/categories', authMiddlewares.authenticateToken, categoryControllers.createCategorys);
app.get(
  '/categories', 
  authMiddlewares.authenticateToken, 
  categoryControllers.getAllCategoriesController,
);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
