define(['knockout'], function(ko) {
	var bodModel = function(data) {
		var self = this;

		self.bodId = ko.observable(data.bodId);
		self.itemId = ko.observable(data.itemId);
		self.naamBieder = ko.observable(data.naamBieder);
		self.klas = ko.observable(data.klas);
		self.email = ko.observable(data.email);
		self.telefoon = ko.observable(data.telefoon);
		self.contactLeerling = ko.observable(data.contactLeerling);
		self.typeKoper = ko.observable(data.typeKoper);
		self.status = ko.observable(data.status);
		self.betaald = ko.observable(data.betaald);
		self.opmerking = ko.observable(data.opmerking);
	};
	
	return bodModel;
});