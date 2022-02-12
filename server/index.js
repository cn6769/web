const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.json());

// add middleware
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

const db = require("./app/models");
//console.log(db) // is not {}
db.sequelize.sync();

require("./app/routes/turorial.routes")(app);

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});