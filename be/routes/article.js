const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

// FETCH GAME
router.get("/fetchAllArticles", async (req, res) => {
    const query = await Review.find({});
    const articles = query.map(element => element.toJSON())

    articles.forEach(article => article.createdAt = article.createdAt.toLocaleString())

    res.status(200).json({ articles: articles, message: "fetching all articles!" });
});


module.exports = router;
