const express = require("express");
const axios = require("axios");
const Game = require("../models/Game");
const Review = require("../models/Review");
const router = express.Router();

// FETCH GAME
router.post("/fetchGame", async (req, res) => {
    const query = req.body.game;
    // console.log("The game that was sent to the BE is:", query);
    // const allGames = await axios.get("http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json")

    axios
        .get(
            "http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json"
        )
        .then((response) => {
            const allGames = response["data"]["applist"]["apps"];
            const games = allGames.filter((game) =>
                game.name.toLowerCase().includes(query.toLowerCase())
            );

            games.sort((a, b) => (a.name.length > b.name.length ? 1 : -1));

            res.status(200).json({
                message: "User successfully registered!",
                queriedGame: games,
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

// PROCESS GAME (CHECK AND STORE)
router.post("/processGame", async (req, res) => {
    const query = req.body;
    // console.log("The user review:", query);

    const gameInfo = await axios
        .get("https://store.steampowered.com/api/appdetails", {
            params: {
                appids: query.gameId,
            },
        })
        .then((response) => {
            const gameInfo = response["data"][query.gameId];
            // console.log(gameInfo);

            if (gameInfo.success) {
                const gameType = gameInfo["data"]["type"];

                if (gameType == "game" || gameType == "dlc") {
                    return gameInfo;
                }

                res.status(400).json({ message: "Selection must be a game" });
            }

            res.status(400).json({ message: "Invalid game option" });
        })
        .catch((error) => {
            console.log(error);
        });

    // const gameId = await Game.findOne({ appId: })
    if (gameInfo) {
        const game = await Game.findOne({ appId: query.gameId });
        if (!game) {
            const newGame = {
                appId: gameInfo.data.steam_appid,
                shortDesc: gameInfo.data.short_description,
                developers: gameInfo.data.developers,
                publishers: gameInfo.data.publishers,
                releaseDate: gameInfo.data.release_date.date,
                headerImage: gameInfo.data.header_image,
            };

            await Game.create(newGame);
        }

        const newReview = {
            gameId: query.gameId,
            title: query.reviewTitle,
            description: query.reviewContent,
            author: query.author,
            recommended: query.recommended,
        }

        await Review.create(newReview)

        res.status(200).json({ success: true })
    }
});

module.exports = router;
