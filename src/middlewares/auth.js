const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ error: 'No Token Provided' })
    }

    const parts = authHeader.split(' ');

    if(!parts.lenght === 2){
        return res.status(401).send({ error: 'Token Error' });
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({ error: 'Token Malformated' });
    }

    jwt.verify(token, authConfig.secret, (error, decoded) => {
        if(error){
            return res.status(401).send({ error: 'Token Invalid' });
        }

        req.userId = decoded.id;

        return next();
    })

};