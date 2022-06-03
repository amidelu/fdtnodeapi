const jwt = require('jsonwebtoken');
const config = require('../config/authConfig');
const db = require('../models');

module.exports = verifyToken = (req, res, next) => {
    let token = req.headers['auth_token'];

    if(!token) {
        return res.status(403).send({
            message: 'No token provided!'
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                message: 'Unauthorized!'
            });
        }
        req.userId = decoded.id;
        next();
    });
};