"use strict";

var bluebird = require('bluebird');

module.exports = {
	handle : function() {
		var data = "here's some data sent from when you sent an AJAX request...";
		return new Promise(function(resolve) {
			resolve(data);
		})
	}
}