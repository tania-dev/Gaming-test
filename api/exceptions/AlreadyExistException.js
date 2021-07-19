class AlreadyExistsException extends Error {
  constructor(message = 'Already Exists', code = 409) {
    super(message);
    this.code = code;
    this.message = message;
  }
}

module.exports = AlreadyExistsException;
