const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.allUsers);
router.get('/:id', UserController.singleUser);
router.post('/', UserController.newUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

router.post('/authenticate', UserController.authenticateUser);

module.exports = router;