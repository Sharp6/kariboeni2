define(['knockout', 'models/categorie.model.client', 'da/categorie.da.client'], function(ko,Categorie,categorieDA) {
	var popupVM = function() {
		var self = this;

		self.categories = ko.observableArray([]);

		self.loadCategories = function() {
			categorieDA.load()
				.then(function(response) {
					var mappedCategories = response.map(function(categorie) {
						return new Categorie(categorie);
					});
					self.categories(mappedCategories);
				});
		}

		self.init = function() {
			self.loadCategories();
		}

	}

	return popupVM;
});