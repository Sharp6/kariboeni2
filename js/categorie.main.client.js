require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery'] },
		"masonry" : { "deps" : ['jquery']}
	},
	paths: {
		jquery: 'libraries/jquery',
		knockout: 'libraries/knockout',
		bootstrap: 'libraries/bootstrap.min',
		masonry: 'libraries/masonry.pkgd.min',
		imagesloaded: 'libraries/imagesloaded.pkgd'
	}
});

require(["jquery", "knockout", "bootstrap", "masonry", "imagesloaded", "utils.client", "viewmodels/categorie.vm.client"], 
	function($, ko, bootstrap, Masonry, imagesLoaded, utils, CategorieVM) {
		utils.activateMenuItem("popup");

		ko.extenders.required = function(target, overrideMessage) {
	    //add some sub-observables to our observable
	    target.hasError = ko.observable();
	    target.validationMessage = ko.observable();
	    //define a function to do validation
	    function validate(newValue) {
	    	target.hasError(newValue ? false : true);
	    	target.validationMessage(newValue ? "" : overrideMessage || "Dit veld moet ingevuld worden.");
	    }
	    //initial validation
	    validate(target());
	    //validate whenever the value changes
	    target.subscribe(validate);
	    //return the original observable
	    return target;
	  };

		var categorieVM = new CategorieVM();
		categorieVM.init();
		ko.applyBindings(categorieVM);

		var imgLoad;
		var msnry;
		var masonryElement = "div.items";
		categorieVM.items.subscribe(function(newItems) {
			imgLoad = imagesLoaded(document.querySelector(masonryElement));
			imgLoad.on('always', function() {
				console.log(imgLoad.images.length + ' images loaded.');
				msnry = new Masonry( masonryElement, {
					columnWidth: '.veilingItem',
					itemSelector: '.veilingItem'
				});
			});
		});
});