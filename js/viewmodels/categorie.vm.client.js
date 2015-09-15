define(['knockout', 'models/item.model.client', 'da/item.da.client'], function(ko,Item,itemDA) {
	var categorieVM = function() {
		var self = this;

		self.items = ko.observableArray([]);
		self.categorieId = ko.observable(document.getElementById('hiddenCat').value);
		self.currentItem = ko.observable();

		self.loadItems = function() {
			itemDA.load()
				.then(function(response) {
					var mappedItems = response.map(function(item) {
						return new Item(item);
					});

					console.log(mappedItems.length);

					var filteredItems = mappedItems.filter(function(item) {
						console.log(item.itemCategorieId());
						return item.itemCategorieId() === self.categorieId();
					});

					console.log(filteredItems.length);

					self.items(filteredItems);
				});
		}

		self.init = function() {
			self.loadItems();
		}
	};

	return categorieVM;
});
