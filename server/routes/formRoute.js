const router = require("express").Router();
const Form = require("../model/formModel");
const authMiddleware = require("../middlewares/authMiddleware");
const QRCode = require('qrcode')
//add new form
router.post("/add-form", authMiddleware, async (req, res) => {
  try {
    const newForm = new Form(req.body);
    const savedForm = await newForm.save();
    const qrCode = await QRCode.toDataURL(
      `http://localhost:5173/public/get-road/${savedForm._id}`
    );

     res.send({
      success: true,
      message: "Form added successfully",
      data: savedForm,
      qrCode,
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
// get form by id
router.get("/get-form/:id", authMiddleware, async (req, res) => {
  try {
    const form = await Form.findById(req.params.id).populate("user");
    if (!form) {
      return res.status(404).send({
        success: false,
        message: "Form not found",
      });
    }
    res.send({
      message: "Form fetched successfully",
      success: true,
      data: form,
    });
  } catch (error) {
    res.send({
      
      message: "Error fetching form",
      error: error.message,
      success: false,
    });
  }
});
// update form by id
router.put("/update-form/:id", authMiddleware, async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      message: "Form updated successfully",
      success: true,
      data: form,
    });
  } catch (error) {
    res.send({
      message: "Error updating form",
      error: error.message,
      success: false,
    });
  }
});
// delete form by id
router.delete("/delete-form/:id", authMiddleware, async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    res.send({
      message: "Form deleted successfully",
      success: true,
      data: form,
    });
  } catch (error) {
    res.send({
      message: "Error deleting form",
      error: error.message,
      success: false,
    });
  }
});

module.exports = router;