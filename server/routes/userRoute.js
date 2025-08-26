const User = require("../model/userModel");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
const comment = require("../model/commentsmodel");
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
//get user details
router.get("/getuser", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.send({
      message: "User details fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.send({ message: "Server error", success: false });
  }
});


router.post("/add-Testimonial", authMiddleware, async (req, res) => {
  try {
    const newComment = new comment(req.body);
    await newComment.save();

    
    res.send({
      message: "Testimonial added successfully",
      data: newComment,
      success: true,
    });
  } catch (error) {
    res.send({ message: "Error while adding Testimonial ", error, success: false });
  }
});
router.get("/get-all-Testimonial/:id", async (req, res) => {
  try {
    const comments = await comment
      .find()
      .populate("user")
      .sort({ createdAt: -1 }) 
      .limit(4); // always only 4 comments
    
    res.send({
      message: "Testimonial fetched successfully",
      success: true,
      data: comments,
    });
  } catch (error) {
    res.send({ error: error.message, success: false });
  }
});
module.exports = router;