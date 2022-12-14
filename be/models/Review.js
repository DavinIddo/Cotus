const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        gameId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        recommended: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema, "reviews");
