const express = require("express");
const Review = require("../models/Review");
const Games = require("../models/Game");
const router = express.Router();

// FETCH ALL ARTICLES
router.get("/fetchAllArticles", async (req, res) => {
    const query = await Review.find({});
    const articles = query.map(element => element.toJSON())

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }
    articles.forEach(article => article.createdAt = article.createdAt.toLocaleString(undefined, dateOptions).replace(',', ''))

    /// find the respective game of the article and grab the header image
    const gameList = await Games.find({ appId: { $in: articles.map(article => article.gameId) }}); 
    articles.forEach((article) => article.gameHeader = gameList.find(game => game.appId === parseInt(article.gameId))['headerImage'])

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

// DELETE AN ARTICLE
router.delete("/deleteArticle", async (req, res) => {
    const query = req.body;
    await Review.deleteOne({ author: query.author, title: query.title });
    
    res.status(200).json({ message: "Article has been deleted!" });
});

module.exports = router;
