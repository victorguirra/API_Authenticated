const mongoose = require('mongoose');
require('../models/users');
const Users = mongoose.model('Users');

module.exports = {
    async newUser(req, res){
        const { email } = req.body;

        if(await Users.findOne({ email })){
            return res.status(400).send({ error: "User Already Exists" })
        }else{
            const AddUser = await Users.create(req.body);

            return res.status(200).send(AddUser);
        }
    },
}