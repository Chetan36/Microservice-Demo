const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.get('/contact/:contact', controller.getUserByContactNumber);
router.post('/', controller.addNewUser);

module.exports = router;
