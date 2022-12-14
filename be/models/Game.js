const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    appId: {
        type: Number,
        required: true,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    // reviewDesc: {
    //     type: String,
    //     required: true,
    // },
    // totalReview: {
    //     type: Number,
    //     required: true,
    // },
    developers: {
        type: [String],
        required: true,
    },
    publishers: {
        type: [String],
        required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    headerImage: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Game", gameSchema, "games");
