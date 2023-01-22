// Gets access to environment variables/settings
require("dotenv").config();

// Connects to the database
require("../db");

// Express handles http requests
const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  module.exports = app;