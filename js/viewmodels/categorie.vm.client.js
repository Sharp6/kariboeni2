define(['knockout', 'models/item.model.client', 'da/item.da.client', 'models/formField.model.client'], function(ko,Item,itemDA,FormField) {
	var categorieVM = function() {
		var self = this;

		self.items = ko.observableArray([]);
		self.categorieId = ko.observable(document.getElementById('hiddenCat').value);

		self.allFormFields = ko.observableArray([]);
		self.currentItem = ko.observable();
		self.formFields = ko.observableArray([]);
		self.typeKoper = ko.observable('Leerling');
		self.typeKoper.subscribe(determineFormFields);

		self.formComplete = ko.computed(function() {
			var complete = true;
			self.formFields().forEach(function(field) {
				if(field.valueHolder.hasError()) {
					complete = false;
				}
			});
			return complete;
		});

		function loadItems() {
			itemDA.load()
				.then(function(response) {
					var mappedItems = response.map(function(item) {
						return new Item(item);
					});

					var filteredItems = mappedItems.filter(function(item) {
						return item.itemCategorieId() === self.categorieId();
					});

					self.items(filteredItems);
				});
		}

		function loadAllFormFields() {
			self.allFormFields.push(new FormField({'label': 'Naam leerling'}));
			self.allFormFields.push(new FormField({'label': 'Naam leerkracht'}));
			self.allFormFields.push(new FormField({'label': 'Naam koper'}));
			self.allFormFields.push(new FormField({'label': 'Naam contact-leerling'}));
			self.allFormFields.push(new FormField({'label': 'Klas'}));
			self.allFormFields.push(new FormField({'label': 'E-mail'}));
			self.allFormFields.push(new FormField({'label': 'Telefoon-nummer'}));
		}

		function determineFormFields() {
			if(self.typeKoper() === "Leerling") {
				//removeFormField("Naam leerkracht");
				//removeFormField("Naam koper");
				//removeFormField("Naam contact-leerling");
				self.formFields.removeAll();

				addFormField("Naam leerling");
				addFormField("Klas");
				addFormField("E-mail");
				addFormField("Telefoon-nummer");
			}

			if(self.typeKoper() === "Leerkracht") {
				// removeFormField("Naam leerling");
				// removeFormField("Naam koper");
				// removeFormField("Naam contact-leerling");
				// removeFormField("Klas");
				self.formFields.removeAll();

				addFormField("Naam leerkracht");
				addFormField("E-mail");
				addFormField("Telefoon-nummer");
			}

			if(self.typeKoper() === "Andere") {
				// removeFormField("Naam leerkracht");
				// removeFormField("Naam leerling");
				self.formFields.removeAll();

				addFormField("Naam koper");
				addFormField("Naam contact-leerling");
				addFormField("Klas");
				addFormField("E-mail");
				addFormField("Telefoon-nummer");
			}
		}

		function addFormField(elem) {

			var myFormField = ko.utils.arrayFirst(self.allFormFields(), function(formField) {
				return formField.label() === elem;
			});

			var myFormFieldFound = ko.utils.arrayFirst(self.formFields(), function(formField) {
				return formField.label() === elem;
			});			

			if(!myFormFieldFound) {
				self.formFields.push(myFormField);
			}
		}

		function removeFormField(elem) {
			var myFormFieldFound = ko.utils.arrayFirst(self.formFields(), function(formField) {
				return formField.label() === elem;
			});

			if(myFormFieldFound) {
				self.formFields.remove(function(formField) {
					return formField.label() === elem;
				});
			}
		}

		self.init = function() {
			loadItems();
			loadAllFormFields();
			determineFormFields();
		}
	};

	return categorieVM;
});
