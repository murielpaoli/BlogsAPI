const users = [
  { id: 1, email: 'lewishamilton@gmail.com', password: '123456' },
];

const findUser = (email, password) => users.find((u) => u.email === email 
&& u.password === password);

const successResponse = (res, data) => {
  res.json(data);
};

const errorResponse = (res, message, status) => {
  res.status(status).json({ message });
};

module.exports = { findUser, successResponse, errorResponse };
