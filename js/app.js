require.config({
    paths: {
    		// Major libraries
        jquery: 'libs/jquery-2.1.0.min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',

        // Require.js plugins
        text: 'libs/text',

        //  Shortcuts
        views: 'app/views',
        collections: 'app/collections'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
    }
});

require(['app/router', 'app/config'], function(Router, Config) {
	Router.init();
});