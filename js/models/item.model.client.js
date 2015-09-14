define(['knockout'], function(ko) {
	var itemModel = function(data) {
		var self = this;

		self.itemId = ko.observable(data.itemId);
		self.itemBeschrijving = ko.observable(data.itemBeschrijving);
		self.itemPrijs = ko.observable(data.itemPrijs);
		self.itemTitel = ko.observable(data.itemTitel);
		self.itemCategorieId = ko.observable(data.itemCategorieId);
		self.bodId = ko.observable(data.bodId);

		self.isSold = ko.computed(function() {
			return self.bodId() > 0;
		});
		self.isSoldClass = ko.computed(function() {
			return self.bodId() > 0 ? "isSold" : "notSold";
		});
		self.itemLabel = ko.computed(function() {
			return self.itemTitel() + " €" + self.itemPrijs();
		});

		self.itemImg = ko.computed(function() {
			return "../img/" + self.itemId() + ".jpg";
		});

	};
	
	return itemModel;
});