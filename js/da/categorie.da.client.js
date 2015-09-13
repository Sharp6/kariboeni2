define(['jquery'], function($){
	"use strict";
	
	var loadCategories = function() {
		return $.getJSON("http://www.kariboeni.be/v2/services/getCategories.php").promise();
	};

	
	/*
	var saveVerrichtingToServer = function(id,data) {
		console.log(data);
		return $.ajax({
			//dataType: "json",
			url: "/api/verrichtingen/" + id,
			data: {verrichting: data},
			method: "PUT"
		}).promise();
	};
	*/
	
	return {
		load : loadCategories
	};
});