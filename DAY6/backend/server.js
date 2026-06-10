const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

require("dotenv").config();

const userroles = require("./Routers/UserRoutes");
app.use("/api/user", userroles);
app.listen(5000, () => {
  console.log("Port 5000");
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });
