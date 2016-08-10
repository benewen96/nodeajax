'use strict';
var express = require('express');
var exphbs  = require('express-handlebars');

//Bring in our routes file
var router = require('./routes/routes.js');

//Bind expres to our app variable
var app = express();

// view engine setup and public static directory
app.set('views', './views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('./public'));

// Load routes into app
app.use(router);

app.listen(3000);

module.exports = app;
