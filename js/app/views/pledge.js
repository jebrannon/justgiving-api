define([
	'jquery',
	'underscore',
	'backbone',
	'app/config',
	'app/collections/pages',
	'text!html/pledge/item.html',
	'text!html/pledge/page.html',
	], function($, _, Backbone, Config, PagesCollection, ItemTemplate, PageTemplate) {
		var pledgeView = Backbone.View.extend({
			el: '#pledges',
			events: {
				"click": "open"
			},
			initialize: function() {
				var charityId = Config.justgiving.charityId;
				var eventId = Config.justgiving.eventId;
				var limit = Config.justgiving.limit;
				this.pages = new PagesCollection(charityId, eventId, limit);
			},
			render: function() {
				var that = this;
				this.pages.fetch({
					success: function () {
						var total = that.pages.length;
						var i = 0;
						that.pages.each(function(page) {
							page.fetch({
								success: function () {
									i++;
									if (i === total) {
										that.output();	
									}
								}
							});
						})
					}
				});
			},
			open: function(e) {
				if (e.target && e.target.getAttribute('data-app-cid')) {
					var that = this;
					var cid = e.target.getAttribute('data-app-cid');
					var model = this.pages.get(cid);
					this.expand(model);
				}
			},
			output: function() {
				$(this.el).append(_.template(ItemTemplate, {pledges: this.pages.models}));
			},
			expand: function(model) {
				if ($('#pledgePage').length > 0) {
					$('#pledgePage').remove();
				}
				$(this.el).prepend(_.template(PageTemplate, {pledge: model}));
			}
		});
		
		return new pledgeView;
	});