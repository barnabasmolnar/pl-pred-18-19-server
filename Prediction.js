const mongoose = require("mongoose");
const mongoUrl = require("./mongoCredentials");

mongoose.Promise = Promise;

mongoose.connect(mongoUrl);

const prediction = mongoose.Schema({

});

module.exports = mongoose.model("Prediction", prediction);