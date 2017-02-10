'use strict';

const userAgent = require('express-useragent');

class UserAgent {

    static getUserAgent(req, res, next){
        const source = req.headers['user-agent'];
        const agent = userAgent.parse(source);
        console.log('User Agent: ', agent);
        next();
    }

}


module.exports = UserAgent;