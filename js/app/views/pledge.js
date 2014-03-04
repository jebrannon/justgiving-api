define([
	'jquery',
	'underscore',
	'backbone',
	'app/config',
	'app/collections/pages',
	'text!html/pledge/item.html',
	], function($, _, Backbone, Config, PagesCollection, ItemTemplate) {
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
						$(that.el).append(_.template(ItemTemplate, {pledges: that.pages.models}));
					}
				});
			},
			open: function(e) {
				if (e.target && e.target.getAttribute('data-app-cid')) {
					var that = this;
					var cid = e.target.getAttribute('data-app-cid');
					var model = this.pages.get(cid);
					if (!model.has('activityCharityCreated')) {
						model.fetch({
							success: function (e) {
								that.expand(model);
							}
						});
					}
					else {
						this.expand(model);
					}
				}
			},
			expand: function(model) {
				console.log('model', model)
			}
		});
		
		return new pledgeView;
	});