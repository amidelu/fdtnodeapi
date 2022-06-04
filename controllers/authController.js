const db = require("../models");
const config = require("../config/authConfig");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// SignUp
exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        res.send({ message: "User registered successfully!" });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

// Signin
exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(!user) {
            return res.status(404).send({
                message: 'User Not Found'
            });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: 'Invalid password!'
            });
        }

        var token = jwt.sign({id: user.id}, config.secret);

        res.status(200).send({
            accessToken: token,
            id: user.id,
            username: user.username
        });
    });
};