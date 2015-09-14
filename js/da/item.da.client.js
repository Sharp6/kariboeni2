define(['jquery'], function($){
	"use strict";
	
	var loadItems = function() {
		return $.getJSON("http://www.kariboeni.be/v2/services/getItems.php").promise();
	};

	return {
		load : loadItems
	};
});