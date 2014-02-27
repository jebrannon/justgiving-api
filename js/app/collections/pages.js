define([
	'jquery',
	'underscore',
	'backbone',
	'app/config',
	], function($, _, Backbone, Config) {
		var Pages = Backbone.Collection.extend({
			// model: 

			url: Config.justgiving.url + Config.justgiving.apiKey + "/v1/fundraising/search?charityId=" + Config.justgiving.charityId + "&eventId=" + Config.justgiving.eventId + "&pageSize=" + Config.justgiving.limit + "&format=json&callback=?",
	    parse: function(resp, xhr) {
	      return resp.SearchResults;
	    },

		});
		
		return Pages;
	});