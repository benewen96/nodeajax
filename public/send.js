"use strict";
(function($) {
	$(function() {
		$.ajax({
             type: 'GET',
             url: '/request',
         }).done(function(response) {
             document.write(response); //return response to client
         });
	});
})(jQuery);