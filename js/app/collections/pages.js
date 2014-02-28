define([
	'jquery',
	'underscore',
	'backbone',
	'app/config',
	'app/models/page',
	], function($, _, Backbone, Config, Page) {
		var Pages = Backbone.Collection.extend({

			//  Default properties
			baseUrl: Config.justgiving.url,
			apiKey: Config.justgiving.apiKey,
			charityId: Config.justgiving.charityId,
			eventId: Config.justgiving.eventId,
			resultLimit: Config.justgiving.limit,

			//  
			initialize: function() {
				this.url = this.baseUrl + this.apiKey + "/v1/fundraising/search?charityId=" + this.charityId + "&eventId=" + this.eventId + "&pageSize=" + this.resultLimit + "&format=json&callback=?";
			},
	    parse: function(resp, xhr) {
	      return resp.SearchResults;
	    },

		});
		
		return Pages;
	});