const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/user');
const {
    validateRegisterInput,
} = require('../utils/validator');

exports.login = async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json({ error: err });
    }
}

exports.registration = async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const { errors, valid } = validateRegisterInput(name, email, password);

      if (!valid) return next(ApiError.validation(errors));

      const existingUser = await User.findOne({ email });

      if (existingUser)
        return next(ApiError.alreadyExist('Email is invalid or already taken'));

      const hashedPassword = await bcrypt.hash(req.body.password, 12);

      const user = new User({
        name,
        email,
        password: hashedPassword
      })

      const token = generateAccessToken(email);
            
      await user.save();

      const _user = await User.findOne({ email }).select(
        '_id name email'
      );

      res.cookie("token", token, {
        expiresIn: '24h',
        httpOnly: true
      });

      res.status(201).json({
        user: _user,
        message: "success",
        status: 201
      });
    } catch(err) {
        res.status(500).json({ error: err });
    }
}

function generateAccessToken(email) {
  return jwt.sign(
    {
      email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '24h',
    }
  );
}