require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery'] },
		"masonry" : { "deps" : ['jquery']}
	},
	paths: {
		jquery: 'libraries/jquery/dist/jquery.min',
		knockout: 'libraries/knockout/dist/knockout',
		bootstrap: 'libraries/bootstrap/dist/js/bootstrap.min',
		masonry: 'libraries/masonry/dist/masonry.pkgd.min',
		imagesloaded: 'libraries/imagesloaded/imagesloaded.pkgd.min'
	}
});

require(["jquery", "knockout", "bootstrap", "masonry", "imagesloaded", "utils.client", "viewmodels/categorie.vm.client"], 
	function($, ko, bootstrap, Masonry, imagesloaded, utils, CategorieVM) {
		utils.activateMenuItem("popup");

		var categorieVM = new CategorieVM();
		categorieVM.init();
		ko.applyBindings(categorieVM);

		var $masonryContainer = $("div.items");
		$masonryContainer.imagesLoaded(function() {
			new Masonry( 'div.items', {
				columnWidth: '.thumbnail',
				itemSelector: '.thumbnail'
			});
		});
});