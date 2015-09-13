require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery'] },
		"masonry" : { "deps" : ['jquery']},
		"imagesLoaded" : { "deps": ['jquery']}
	},
	paths: {
		jquery: 'libraries/jquery',
		knockout: 'libraries/knockout',
		bootstrap: 'libraries/bootstrap.min',
		masonry: 'libraries/masonry.pkgd.min',
		imagesloaded: 'libraries/imagesloaded.pkgd'
	}
});

require(["jquery", "knockout", "bootstrap", "masonry", "imagesloaded", "utils.client", "viewmodels/popup.vm.client"], 
	function($, ko, bootstrap, Masonry, imagesLoaded, utils, PopupVM) {
		utils.activateMenuItem("popup");

		var popupVM = new PopupVM();
		popupVM.init();
		ko.applyBindings(popupVM);

		var imgLoad;
		var msnry;

		var masonryElement = "div.categories";

		popupVM.categories.subscribe(function(newCategories) {
			imgLoad = imagesLoaded(document.querySelector(masonryElement));
			imgLoad.on('always', function() {
				console.log(imgLoad.images.length + ' images loaded.');
				msnry = new Masonry( masonryElement, {
					columnWidth: '.thumbnail',
					itemSelector: '.thumbnail'
				});
			});
		});
		
		/*
		
		var imgLoad = imagesLoaded(document.querySelector(".categories"));
		imgLoad.on('always', function() {
			console.log(imgLoad.images.length + ' images loaded.');
			
		});
*/

		/*
		imagesLoaded(masonryElement, function() {
			console.log("Images are now loaded.");
			var msnryElem = document.querySelector(masonryElement);
			var msnry = new Masonry( msnryElem, {
				columnWidth: '.thumbnail',
				itemSelector: '.thumbnail'
			});
		});
*/

});