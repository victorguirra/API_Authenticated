const mongoose = require('mongoose');
require('../models/users');
const Users = mongoose.model('Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generatedToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

module.exports = {
    async allUsers(req, res){
        const users = await Users.find();

        return res.status(200).send(users);
    },

    async singleUser(req, res){
        const user = await Users.findById(req.params.id);

        return res.json(user);
    },

    async newUser(req, res){
        const { email } = req.body;

        if(await Users.findOne({ email })){
            return res.status(400).send({ error: "User Already Exists" })
        }else{
            const AddUser = await Users.create(req.body);

            AddUser.password = undefined;

            return res.status(200).send({
                AddUser,
                token: generatedToken({ id: AddUser.id })   
            });
        }
    },

    async updateUser(req, res){
        const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).send(user);
    },

    async deleteUser(req, res){
        await Users.findByIdAndRemove(req.params.id);

        return res.status(200).send(`User With Id ${ req.params.id } Successfully Deleted!`);
    },

    async authenticateUser(req, res){
        const { email, password } = req.body;

        const user = await Users.findOne({ email }).select('+password');

        if(!user){
            return res.status(400).send({ error: 'User Not Found' });
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({ error: 'Invalid Password' });
        }

        user.password = undefined;

        res.send({ 
            user,
            token: generatedToken({ id: user.id }) 
        });

    }
}