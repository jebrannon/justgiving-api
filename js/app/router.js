define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/pledge',
	],
	function($, _, Backbone, pledge) {
		var AppRouter = Backbone.Router.extend({
			routes: {
				'*actions': 'index'
			},
			index: function() {
				pledge.render();
			}
		});
		var init = function() {
			var app_router = new AppRouter;
			Backbone.history.start();
		};
		return {
			init: init
	 	}
	});