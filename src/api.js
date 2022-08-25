const express = require('express');

const loginController = require('./controllers/login');

const verifyLogin = require('./middlewares/loginVerification');

const app = express();

app.use(express.json());

app.post('/login', verifyLogin, loginController.login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
