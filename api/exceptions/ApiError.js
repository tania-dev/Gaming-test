const NotMatchedException = require('./NotMatchedException');
const ValidationException = require('./ValidationException');
const AlreadyExistException = require('./AlreadyExistException');

class ApiError {
  static notMatched(message) {
    return new NotMatchedException(message, 401);
  }

  static alreadyExist(message) {
    return new AlreadyExistException(message, 409);
  }

  static validation(message) {
    return new ValidationException(message, 400);
  }
}

module.exports = ApiError;
