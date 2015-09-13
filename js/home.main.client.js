require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery'] }
	},
	paths: {
		jquery: 'libraries/jquery/dist/jquery.min',
		knockout: 'libraries/knockout/dist/knockout',
		bootstrap: 'libraries/bootstrap/dist/js/bootstrap.min'
	}
});

require(["jquery", "knockout", "bootstrap", "utils.client"], 
	function($, ko, bootstrap, utils) {
		utils.activateMenuItem("home");
	});