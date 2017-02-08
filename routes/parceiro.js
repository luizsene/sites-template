'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const UserAgent = require('../utils/userAgent');


router.get('/', [UserAgent.getUserAgent], (req, res) =>{
    res.sendFile(path.join(__dirname + '/../views/parceiro/index.html'));
});

module.exports = router;