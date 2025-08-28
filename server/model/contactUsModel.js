const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "users",
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("contactUs",contactUsSchema);
