const express = require('express');
const loginController = require('./controllers/login');
const { userMiddlewares, authMiddlewares } = require('./middlewares');
const { userControllers } = require('./controllers');

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

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
