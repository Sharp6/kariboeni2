define(['knockout', 'models/item.model.client', 'da/item.da.client'], function(ko,Item,itemDA) {
	var categorieVM = function() {
		var self = this;

		self.items = ko.observableArray([]);
		self.categorieId = ko.observable();

		self.loadItems = function() {
			itemDA.load()
				.then(function(response) {
					var mappedItems = response.map(function(item) {
						return new Item(item);
					});
					var filteredItems = mappedItems.filter(function(item) {
						return item.itemCategorieId() === self.categorieId()

					});
				});
		}

		self.init = function() {
			self.loadItems();
		}
	};

	return categorieVM;
});