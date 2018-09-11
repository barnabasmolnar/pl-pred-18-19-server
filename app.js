const express = require("express");
const bodyParser = require("body-parser");
const Prediction = require("./Prediction");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/api/prediction", (req, res) => {
    Prediction
        .find({}, "userName createdAt")
        .sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => res.status(404).json(err));
});

app.get("/api/prediction/:id", (req, res) => {
    Prediction.findOne({_id: req.params.id})
        .then(found => res.json(found))
        .catch(err => res.status(404).json(err))
});

app.post("/api/prediction", (req, res) => {
    const userPrediction = new Prediction(req.body);
    userPrediction.save()
        .then(saved => res.json(saved))
        .catch(err => res.status(400).json(err))
});

app.listen(3001, () => {
    console.log("App listening on port 3001!");
});