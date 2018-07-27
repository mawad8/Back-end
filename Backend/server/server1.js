 // Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 80;

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Mohammad & Bryan Full-Stack Class");
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});