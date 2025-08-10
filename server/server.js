const express = require("express");
const app = express();

require("dotenv").config();

require("./config/dbConfig");

const PORT = process.env.PORT || 4000;


 
app.use(express.json());


const userRoute = require("./routes/userRoute");
const formRoute = require("./routes/formRoute");
const PublicViewRoute = require("./routes/PublicViewRoute");
app.use("/api/users", userRoute);
app.use("/api/forms", formRoute);
app.use("/api/public", PublicViewRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
