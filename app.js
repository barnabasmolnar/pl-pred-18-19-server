const express = require("express");
const bodyParser = require("body-parser");
const Prediction = require("./Prediction");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/api/prediction", (req, res) => {

});

app.get("/api/prediction/:id", (req, res) => {

});

app.post("/api/prediction", (req, res) => {

});

app.listen(3001, () => {
    console.log("App listening on port 3001!");
});