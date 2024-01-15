const jwt = require('jsonwebtoken');
const loginService = require('../services/login.services');

const JWT_SECRET = process.env.JWT_SECRET || 'secretpassword';

const loginController = (req, res) => {
  const { email, password } = req.body;
  // Verificando se todos os campos estão preenchidos
  if (!email || !password) {
    return loginService.errorResponse(res, 'Some required fields are missing', 400);
  }
  // Verificando se o usuário existe e as credenciais estão corretas
  const user = loginService.findUser(email, password);
  if (!user) {
    return loginService.errorResponse(res, 'Invalid fields', 400);
  }
  // Gerando o jason web token
  const token = jwt.sign(
    {
      payload: { id: user.id, displayName: user.displayName, email: user.email, image: user.image,
      },
    },
    JWT_SECRET,
    { expiresIn: '1h' },
  );
  loginService.successResponse(res, { token });
};

module.exports = { loginController };
