const router = require("express").Router();
const Form = require("../model/formModel");

// get road info by id
router.get("/get-road/:id", async (req, res) => {
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
module.exports = router;