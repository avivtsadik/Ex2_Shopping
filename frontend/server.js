const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./dist"));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(4000, () => console.log("Server started at http://localhost:4000"));
