const express = require('express');
const db = require("./dbConnection/userConnection");
const index = require("./routes/userRoutes");

var app = express()
var cors = require("cors");
app.use(cors());

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
app.use("/products", jsonParser, index);

app.listen(3000, () => {
    console.log("Server is Running");
});