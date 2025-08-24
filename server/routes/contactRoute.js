const router = require("express").Router();
const contactUs = require("../model/contactUsModel");
const authMiddleware = require("../middlewares/authMiddleware");


router.post("/add-contact", async (req, res)=> {
  try{
    const newContactUs = new contactUs (req.body);
    const saveContact = await newContactUs.save();
         res.send({
      success: true,
      message: "Message send successfully",
      data: saveContact,
    });
  }catch (error){
    console.error("Error sending Message:");
     res.send({
      error: error.message,
      success: false,
    });
  }

});
module.exports = router