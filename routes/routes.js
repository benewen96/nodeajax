'use strict';
// Routes in this module require authentication
var bluebird = require('bluebird');
var express = require('express');
var ajaxIO = require('../controllers/AJAXhandler.js');
var router = express.Router();

//listen for GET on root
router.get('/', function(req, res) {
	res.render('index'); //render index to html and send to client
});

//listen for GET on /request endpoint
router.get('/request', function(req,res) {
	ajaxIO.handle()
	  .then(function(response) {
	  	res.send(response);
	  });
});

module.exports = router;
