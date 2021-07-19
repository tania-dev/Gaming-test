function apiErrorHandler(err, _, res, next) {
  res.status(err.code).send(err.message);
  next();
}

module.exports = apiErrorHandler;
