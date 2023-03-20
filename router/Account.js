const express = require("express");
const app = express.Router();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/login", (req, res) => res.send("login"));

module.exports = app;
