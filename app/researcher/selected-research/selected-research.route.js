angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('selected-research', {
		url: '/selected-research?name&id',
		params: {'name': null, 'id': null},
		templateUrl: 'app/researcher/selected-research/selected-research.html',
		controller: 'selectedResearchController',
		parent: 'researcherShell'
	})
});


