const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('./controller');

router.get('/user', getUsers);
router.post('/user', addUser);

module.exports = router;
