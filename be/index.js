const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 3001;

const app = express();

dotenv.config();

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("Connected to the MongoDB!"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`);
});
