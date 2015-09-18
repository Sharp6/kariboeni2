define(['knockout'], function(ko) {
	var categorieModel = function(data) {
		var self = this;

		self.categorieId = ko.observable(data.categorieId);
		self.categorieNaam = ko.observable(data.categorieNaam);
		self.categorieBeschrijving = ko.observable(data.categorieBeschrijving);

		self.categorieUrl = ko.computed(function() {
			return "categorie.php?catId=" + self.categorieId();
		});
		self.categorieImg = ko.computed(function() {
			return "../img/categories/" + self.categorieId() + ".jpg";
		});

	};
	
	return categorieModel;
});