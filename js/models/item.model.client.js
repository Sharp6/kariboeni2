define(['knockout'], function(ko) {
	var itemModel = function(data) {
		var self = this;

		self.itemId = ko.observable(data.itemId);
		self.itemBeschrijving = ko.observable(data.itemBeschrijving);
		self.itemPrijs = ko.observable(data.itemPrijs);
		self.itemTitel = ko.observable(data.itemTitel);
		self.itemCategorieId = ko.observable(data.itemCategorieId);

	};
	
	return bodModel;
});