const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.listen(4444, console.log("Running on port: 4444"));

