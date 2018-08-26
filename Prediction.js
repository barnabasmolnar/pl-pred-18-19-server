const mongoose = require("mongoose");
const mongoUrl = require("./mongoCredentials");

mongoose.Promise = Promise;

mongoose.connect(mongoUrl, { useNewUrlParser: true });

const prediction = new mongoose.Schema({
    userName: {
		type: String, 
		required: true,
		unique: true
    },
    predictedTable: {
		type: [String],
		required: true
    },
    mostGoalsScored: {
        type: String,
        required: true
    },
    mostGoalsConceded: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Prediction1819", prediction);