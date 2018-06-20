angular.module('orledor', ['ui.router', 'ngMaterial', 'chart.js']);

angular.module('orledor')
	.config(function($urlRouterProvider)
    {
			var port = process.env.PORT || 8082;
		$urlRouterProvider.when('', '/login');
		$urlRouterProvider.when('/', '/login');    	
    });
