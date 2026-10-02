const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "The home URL is working.." });
});

app.listen(PORT, function () {
  console.log("Backend is live at port: 3000");
});
