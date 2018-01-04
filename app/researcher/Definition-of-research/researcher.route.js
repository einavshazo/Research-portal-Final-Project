angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('researcher', {
		url: '/researcher',
		templateUrl: 'app/researcher/Definition-of-research/researcher.html',
		controller: 'researcherController',
		parent: 'researcherShell'
	})
});