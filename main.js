console.clear();
const express = require("express");
const app = express();

app.get("/", (req, res) =>
  res.send("Great! It is working right now! Okay????")
);
app.get("/about", (req, res) => res.send("About Page"));
app.get("/contact", (req, res) => res.send("Contact Page"));
app.listen(8080, () =>
  console.log("server is running at http://localhost:8080")
);
