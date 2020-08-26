const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === "OPTIONS"){
        res.header(
            'Access-Control-Allow-Methods', 
            'GET, POST, PUT, PATCH, DELETE'
        )
        return res.status(200).send({})
    }

    next();
})

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