angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('researches-list', {
		url: '/researches-list',
		templateUrl: 'app/researcher/researches-list/researches-list.html',
		controller: 'researchesListController',
		parent: 'researcherShell'
	})
});