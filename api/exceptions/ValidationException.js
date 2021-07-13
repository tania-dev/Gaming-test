class ValidationException extends Error {
  constructor(message, code = 400) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

module.exports = ValidationException;