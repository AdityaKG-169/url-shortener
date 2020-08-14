const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urls = new Schema({
	url: {
		type: String,
		required: true,
	},
	shortLink: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("urls", urls);
