const express = require('express');
const app = express();

app.use('/products', require('./routes/products'));
app.use('/requests', require('./routes/requests'));

app.listen(3333, () => {
    console.log("✔ Server Running at URL: http://localhost:3333");
})