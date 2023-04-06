const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const createRoute = require("./routes/create");
const profileRoute = require("./routes/profile");
const articleRoute = require("./routes/article");

const PORT = process.env.PORT || 3001;

const app = express();

dotenv.config();

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("Connected to the MongoDB!"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/create", createRoute);
app.use("/api/profile", profileRoute);
app.use("/api/article", articleRoute);

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`);
});
