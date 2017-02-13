'use strict';

const express = require('express');
const app = express();
const parceiroRoutes = require('./routes/parceiro');
const appRoutes = require('./routes/app');
const commomRoutes = require('./routes/common');

/*---------------------- Proxy reverso de arquivos estáticos ---------------------- */
app.use('/bundle', express.static(__dirname + '/public/bundle'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
/*-------------------------------------------------------------------------------- */

/*--------------------- Config template engine -------------------------*/
app.set('view engine', 'ejs');
/*----------------------------------------------------------------------*/

app.use('/', commomRoutes);
app.use('/parceiro', parceiroRoutes);
app.use('/app', appRoutes);

app.listen(3000, function () {
    console.log('Site listening on port 3000!');
});