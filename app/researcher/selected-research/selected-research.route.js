angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('selected-research', {
		url: '/selected-research',
		templateUrl: 'app/researcher/selected-research/selected-research.html',
		controller: 'selectedResearchController',
		parent: 'researcherShell'
	})
});