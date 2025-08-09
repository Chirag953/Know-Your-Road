const mongoose = require("mongoose");

const roadProjectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    roadName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    estimatedCost: {
      type: Number,
      required: true,
      min: 0,
    },
    completionDate: {
      type: Date,
      required: true,
    },
    builder: {
      type: String,
      required: true,
    },
    officer: {
      type: String,
      required: true,
    },
    governmentRole: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoadProject", roadProjectSchema);
