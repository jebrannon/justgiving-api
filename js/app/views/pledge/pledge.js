define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/pages',
	'app/models/page',
	'text!views/pledge/pledge.html',
	], function($, _, Backbone, PagesCollection, PageModel, PledgeTemplate) {
		var pledgeView = Backbone.View.extend({
			el: 'body',
			model: PageModel,
			events: {
				"click": "open"
			},
			initialize: function() {

				console.log('pledge', this.el)


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
			},
			open: function(e) {
				
				this.model.pageShortName = e.target.getAttribute('data-page-short-name');


				console.log(this.model.pageShortName);
				console.log(this.model.url);
			} 
		});
		
		return new pledgeView;
	});