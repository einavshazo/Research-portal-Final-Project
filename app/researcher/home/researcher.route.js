angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('researcher', {
		url: '/researcher',
		templateUrl: 'app/researcher/home/researcher.html',
		controller: 'researcherController',
		parent: 'shell'
	})
});