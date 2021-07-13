require('dotenv').config({ silent: true });

module.exports = {
  app: {
    name: 'Gaming Test',
    env: process.env.APP_ENV || 'development',
    secret: process.env.APP_SECRET || 'verysecretkey',
    port: process.env.APP_PORT || 5000,
    domain: process.env.APP_DOMAIN || 'http://localhost',
  },
  db: {
    mongo: {
      username: process.env.DB_USER || '',
      password: process.env.DB_PASS || '',
      port: process.env.DB_PORT || '27017',
      host: process.env.DB_HOST || 'localhost',
      dbname: process.env.DB_NAME || 'gaming-test',
      ip: process.env.MONGO_IP || 'mongo',
    },
  },
};