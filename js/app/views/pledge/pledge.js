define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/pages',
	'text!views/pledge/pledge.html',
	], function($, _, Backbone, PagesCollection, PledgeTemplate) {
		var pledgeView = Backbone.View.extend({
			el: 'body',
			initialize: function() {
				console.log('initialize');
				this.pagesCollection = new PagesCollection();
			},
			render: function() {
				var that = this;
				this.pagesCollection.fetch({
					success: function (pages) {
						console.log(pages.models);
						$(that.el).append(_.template(PledgeTemplate, {pledges: pages.models, _:_}));
					}
				});

				
			}
		});
		
		return new pledgeView;
	});