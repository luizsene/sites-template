'use strict';

const express = require('express');
const router = express.Router();
const path = require("path");
const UserAgent = require('../utils/userAgent');

router.get('/', [UserAgent.getUserAgent], (req, res) =>{
    res.render(path.join(__dirname + '/../views/index'));
});

module.exports = router;