const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json({ message: "User successfully registered!" });
    } catch (error) {
        res.status(500).json(error);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ message: "Username does not exists" });

        const validate = await bcrypt.compare(req.body.password, user.password);
        if (!validate) return res.status(400).json({ message: "Wrong password!" });

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
