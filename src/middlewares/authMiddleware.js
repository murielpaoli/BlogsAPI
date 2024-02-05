const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET || 'yourSecretToken';

function bearertoken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const authenticateToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization'); // usuario do token

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = bearertoken(bearerToken);

  try {
    const payload = jwt.verify(token, key);

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authenticateToken,
};
