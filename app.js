const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const itemsListRoutes = require("./routes/index");

app.use(bodyParser.json());

app.use(itemsListRoutes);

app.get("/", function(req, res) {
 return res.json("Testing the Shopping Item route");
});

app.listen(3000, function(){
 console.log("Testing this server on port 3000");
});