const express = require("express");
const axios = require("axios");
const router = express.Router();

// FETCH GAME
router.post("/fetchGame", async (req, res) => {
    try {
        const query = req.body.game; 
        console.log("The game that was sent to the BE is:", query)
        // const allGames = await axios.get("http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json")

        axios.get("http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json")
        .then(response => {
            const allGames = response["data"]["applist"]["apps"]
            const games = allGames.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));

            games.sort((a, b) => (a.name.length > b.name.length) ? 1 : -1)

            res.status(200).json({ message: "User successfully registered!", queriedGame: games });
        })
        .catch(error => {
            console.log(error)
        })

    } catch (error) {
        res.status(500).json(error);
    }

});

module.exports = router;
