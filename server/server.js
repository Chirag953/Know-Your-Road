const express = require("express");
const app = express();

require("dotenv").config();

require("./config/dbConfig");

const PORT = process.env.PORT || 4000;



app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request on ${req.url}`);
  next();
});


app.use(express.json());


const userRoute = require("./routes/userRoute");
app.use("/api/users", userRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
