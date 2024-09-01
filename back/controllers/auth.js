const User = require("../models/User.js");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res, next) => {
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Duplicate", msg: "User already exist!" });
    return;
  }

  const user = await User.create(req.body);

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ userName: user.userName, token });
};

const login = async (req, res, next) => {
  
  console.log(req.body.email);
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new UnauthenticatedError("User name or/and password invalid, please make sure you entered the correct user name and password");
  }
  const isPasswordCorrect = await user.comparePassword(req.body.password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("User name or/and password invalid, please make sure you entered the correct user name and password");

  }
  // compare password
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.userName }, token });
};

module.exports = { register, login };
