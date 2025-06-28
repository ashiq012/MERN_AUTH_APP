const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/database").connect();

app.use(express.json());

const corsOptions = {
  origin: "https://mern-ui-six.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
};
app.use(cors(corsOptions));

const router = require("./routes/auth");
app.use("/api/v1", router);

module.exports = app;
