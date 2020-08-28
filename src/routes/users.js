const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.allUsers);
router.post('/', UserController.newUser);
router.put('/:id', UserController.updateUser);

module.exports = router;