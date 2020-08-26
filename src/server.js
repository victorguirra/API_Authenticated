const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).json({ "hello": "world" })
})

app.listen(3333, () => {
    console.log("✔ Server Running at URL: http://localhost:3333");
})