const User = require("../model/userModel");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user

router.post("/register", async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.send({ message: "User already exists", success: false });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // Create a new user
    const newUser = new User(req.body);
    await newUser.save();

    res.send({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.send({ message: error.message || "Server error", success: false });
  }
});

// Login a user
router.post("/login", async (req, res) => {
  try {
    //check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({ message: "User does not exist", success: false });
    }

    //check password is correct
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.send({ message: "Invalid password", success: false });
    }
    // create and send JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    //send token to client
    res.send({
      message: "Login successful",
      success: true,
      data: {
        token,
        role: user.role,
      },
    });
  } catch (error) {
    res.send({ message: "Login failed", success: false });
  }
});

module.exports = router;
