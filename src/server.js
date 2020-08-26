const express = require('express');
const app = express();

app.use('/products', require('./routes/products'));

app.listen(3333, () => {
    console.log("✔ Server Running at URL: http://localhost:3333");
})