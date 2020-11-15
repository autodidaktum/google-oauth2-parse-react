let express = require("express");
let path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
