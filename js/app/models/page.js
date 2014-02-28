define([
	'jquery',
	'underscore',
	'backbone',
	'app/config',
	], function($, _, Backbone, Config) {
		var Page = Backbone.Model.extend({
			baseUrl: Config.justgiving.url,
			apiKey: Config.justgiving.apiKey,
			pageShortName: '',
			initialize: function() {
				this.url = this.baseUrl + this.apiKey + "/v1/fundraising/pages/" + this.pageShortName;
			},
		});

		
		return Page;
	});