const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./Routes/htmlRoutes");
const app = express();

var PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });