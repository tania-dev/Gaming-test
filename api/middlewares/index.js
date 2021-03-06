const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');

module.exports = [
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true,
  }),
  compression(),
  cors({
    origin: true,
    methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: [
      'x-now-id',
      'x-now-trace',
      'x-powered-by',
      'Origin',
      'Accept',
      'Content-Type',
      'Set-Cookie',
      'Authorization',
    ],
    credentials: true,
  }),
  cookieParser(),
  helmet(),
  morgan('tiny'),
];
