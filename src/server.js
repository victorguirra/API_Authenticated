const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use('/products', require('./routes/products'));
app.use('/requests', require('./routes/requests'));

app.listen(3333, () => {
    console.log("✔ Server Running at URL: http://localhost:3333");
})