const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

// FETCH GAME
router.get("/fetchAllArticles", async (req, res) => {
    const articles = await Review.find({});

    // console.log(articles);

    res.status(200).json({ message: "fetching all articles!" });
});


module.exports = router;
