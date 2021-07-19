const validateRegisterInput = (name, email, password) => {
  const errors = {};

  if (name.trim() === '') {
    errors.name = 'Name must not be empty';
  }

  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  }

  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

const validateLoginInput = (email = '', password = '') => {
  const errors = {};

  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  }

  if (password.trim() === '') {
    errors.password = 'Password must not be empty';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports = {
  validateLoginInput,
  validateRegisterInput,
};
