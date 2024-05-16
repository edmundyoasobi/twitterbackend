const User = require("../models/user");

const handleErrors = (err) => {
  let error = { email: "", password: "" };
  //duplicate error code 
  if (err.code ===11000){
    error.email = 'that email is already registered'
    return errors;
  }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

const signUp = async (req, res) => {
  console.log(req.body.password);
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ success: true, result: newUser });
  } catch (err) {
    const errors = handleErrors(err);
    return res.status(400).json({ success: false, message: errors });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    res.status(201).send({ success: true, result: user });
  } catch {
    res.status(400).json({ success: false });
  }
};
module.exports = {
  login,
  signUp,
};
