
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    console.log("Welcome to api!")
    res.json({ message: 'Hello World!'})
})

app.get('/:userId', (req, res) => {
    res.send(req.params)
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`)
})