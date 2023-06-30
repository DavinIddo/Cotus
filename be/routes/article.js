const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

// FETCH ALL ARTICLES
router.get("/fetchAllArticles", async (req, res) => {
    const query = await Review.find({});
    const articles = query.map(element => element.toJSON())

    articles.forEach(article => article.createdAt = article.createdAt.toLocaleString())

    res.status(200).json({ articles: articles, message: "fetching all articles!" });
});


// UPDATE AN ARTICLE
router.put("/updateArticle", async (req, res) => {
    const query = req.body;
    const review = await Review.findOne({ author: query.author, title: query.title });
    review.description = query.newDescription

    await review.save();
    res.status(200).json({ message: "Article has been updated!", newDesc: review.description });
});


module.exports = router;
