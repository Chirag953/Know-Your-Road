const router = require("express").Router();
const Form = require("../model/formModel");
const authMiddleware = require("../middlewares/authMiddleware");

//add new form
router.post("/add-form", authMiddleware, async (req, res) => {
  try {
    const newForm = new Form(req.body);

    const savedForm = await newForm.save();
     res.send({
      success: true,
      message: "Form added successfully",
      data: savedForm,
    });
  } catch (error) {
     console.error("Error adding form:", error);
     res.send({
      error: error.message,
      success: false,
    });
  }
});

//get all forms

router.get("/get-all-forms", authMiddleware, async (req, res) => {
  try {
    const forms = await Form.find().populate("user").sort({ createdAt: -1 }); // Sort by creation date, newest first
    res.send({
      message: "Forms fetched successfully",
      success: true,
      data: forms,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
});




module.exports = router;