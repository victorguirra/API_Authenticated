const mongoose = require('mongoose');
require('../models/users');
const Users = mongoose.model('Users');

module.exports = {
    async allUsers(req, res){
        const users = await Users.find();

        return res.status(200).send(users);
    },

    async newUser(req, res){
        const { email } = req.body;

        if(await Users.findOne({ email })){
            return res.status(400).send({ error: "User Already Exists" })
        }else{
            const AddUser = await Users.create(req.body);

            return res.status(200).send(AddUser);
        }
    },

    async updateUser(req, res){
        const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).send(user);
    }
}