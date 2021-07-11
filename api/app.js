const express = require('express');
const middlewares = require('./middlewares');
const router = require('./routes');

require("dotenv").config();

const app = express();
app.use(middlewares);
router.registerApplicationRoutes(app);

module.exports = app;