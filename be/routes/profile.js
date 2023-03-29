const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

// UPDATE PROFILE
router.put("/update", async (req, res) => {
    const user = await User.findOne({ username: req.body.userInfo[0], email: req.body.userInfo[1] })

    if (user.username !== req.body.newUsername) {
        const checkUsername = await User.findOne({ username: req.body.newUsername });
        if (checkUsername) return res.status(400).json({ message: "Username is already taken" });

        user.username = req.body.newUsername;
    }

    if (user.email !== req.body.newEmail) {
        const email = await User.findOne({ email: req.body.newEmail });
        if (email) return res.status(400).json({ message: "Email has already been used" });
        
        user.email = req.body.newEmail;
    }

    if(req.body.newPassword) {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.newPassword, salt);

        user.password = hashedPass;
    }

    await user.save();
    res.status(200).json({ message: "User successfully updated!" });
});

module.exports = router;
