define(['jquery'], function($){
	"use strict";
	
	var loadBoden = function() {
		return $.getJSON("/v2/services/getBoden.php").promise();
	};

	return {
		load : loadBoden
	};
});