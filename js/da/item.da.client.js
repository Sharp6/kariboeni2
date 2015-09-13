define(['jquery'], function($){
	"use strict";
	
	var loadItems = function() {
		return $.getJSON("/v2/services/getItems.php").promise();
	};

	return {
		load : loadItems
	};
});