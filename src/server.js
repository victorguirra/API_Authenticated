const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use('/products', require('./routes/products'));
app.use('/requests', require('./routes/requests'));

app.use(( req, res, next ) => {
    const error  = new Error("No Route Found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)

    return res.send({
        newError:{
            message: error.message
        }
    })
})

app.listen(3333, () => {
    console.log("✔ Server Running at URL: http://localhost:3333");
})