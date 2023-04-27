const express = require('express');
const router = express.Router();
const {getUsers, addUser} = require("./controller");

router.get("/getUsers", getUsers)
router.post("/addUser", addUser)

module.exports = router