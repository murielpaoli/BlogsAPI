const express = require('express');
const { validateLogin } = require('./middlewares/validateLogin');
const { loginController } = require('./controllers/login');
const { validateUser } = require('./middlewares/validateUserFields');
const { 
  createUserController, 
  getAllUsersController, 
  userControllerFindById } = require('./controllers/user.controller');
const { authenticateToken } = require('./middlewares/authMiddleware');
const { 
  createCategorys, 
  getAllCategoriesController } = require('./controllers/category.controllers');
const { postOK } = require('./middlewares/validatePost');
const { postController } = require('./controllers/blogPost.controller');
const { 
  getAllPostsController, 
  getPostByIdController } = require('./controllers/postService.controller');
const { 
  updatePostController, deletePostController } = require('./controllers/postService2.controller');
const { deleteCurrentUserController } = require('./controllers/userDelete.controller');
const { searchPostsController } = require('./controllers/blogPostSearch.controller');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateLogin, loginController);

app.post('/user', validateUser, createUserController);

app.get('/user', authenticateToken, getAllUsersController);

app.get('/user/:id', authenticateToken, userControllerFindById);

app.post('/categories', authenticateToken, createCategorys);

app.get('/categories', authenticateToken, getAllCategoriesController);

app.post('/post', authenticateToken, postOK, postController);

app.get('/post', authenticateToken, getAllPostsController);

app.get('/post/:id', authenticateToken, getPostByIdController);

app.put('/post/:id', authenticateToken, updatePostController);

app.delete('/post/:id', authenticateToken, deletePostController);

app.delete('/user/me', authenticateToken, deleteCurrentUserController);

app.get('/post/search', authenticateToken, searchPostsController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
