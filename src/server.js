const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./database/connection');

app.use('/products', require('./routes/products'));
require('./models/products');

app.listen(3333, () => {
    console.log(' ✔ Server Running At URL: http://localhost:3333 ')
})