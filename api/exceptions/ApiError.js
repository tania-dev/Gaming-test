const NotFoundException = require('./NotFoundException');
const NotMatchedException = require('./NotMatchedException');
const ValidationException = require('./ValidationException');
const AlreadyExistsException = require('./AlreadyExistsException');

class ApiError {

  static notMatched(message) {
    return new NotMatchedException(message, 401);
  }

  static notFound(message) {
    return new NotFoundException(message, 404);
  }

  static alreadyExist(message) {
    return new AlreadyExistsException(message, 409);
  }

  static validation(message) {
    return new ValidationException(message, 400);
  }
}

module.exports = ApiError;