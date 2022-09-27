const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const username = await User.findOne({ username: req.body.username });
        if (username) return res.status(400).json({ message: "Username is already taken"});

        const email = await User.findOne({ email: req.body.email });
        if (email) return res.status(400).json({ message: "Email has already been used"});

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        }
        
        const user = await User.create(newUser);
        res.status(200).json({ message: `User successfully registered!` });
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

        const userData = { username: user.username, email: user.email }
        res.status(200).json({ message: "Login successful", userData: userData });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
