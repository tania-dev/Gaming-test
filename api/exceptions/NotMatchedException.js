class NotMatchedException extends Error {
    constructor(message = 'Not Matched', code = 401) {
      super(message);
      this.code = code;
      this.message = message;
    }
  }
  
  module.exports = NotMatchedException;