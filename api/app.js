const express = require('express');
const middlewares = require('./middlewares');
const config = require('./config');
const router = require('./routes');
const db = require('./db');
const apiErrorHandler = require('./middlewares/apiErrorHandler');

const app = express();
app.use(middlewares);
db.connect(config);
router.registerApplicationRoutes(app);
app.use(apiErrorHandler);

module.exports = app;