/** @format */

const express = require("express");
const path = require("path");
app = express();

const USERS = [
  { id: 1, name: "Samuel" },
  { id: 1, name: "Abraham" },
  { id: 1, name: "Jane" },
];

app.get("/test", (req, res) => {
  res.send("test rout is working");
});

app.get("/users", (req, res) => {
  res.send(USERS);
});

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

module.exports = app;
