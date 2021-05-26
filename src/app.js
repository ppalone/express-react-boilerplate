const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    status: 200,
    message: "Hello World!",
  });
});

if (isProd) {
  console.log("IN PRODUCTION . . .");
  app.use(express.static(path.join(__dirname, "../", "app", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, ".." ,"app", "build", "index.html"));
  });
}

module.exports = app;
