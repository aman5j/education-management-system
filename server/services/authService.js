const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async ({
  name,
  email,
  password,
  mobile,
  role,
}) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const error = new Error("Email is already registered");
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    mobile,
    role,
  });

  return user;
};

const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  registerUser,
  comparePassword,
};