angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('researcherShell', {
		url: '/researcher',
		templateUrl: 'app/researcher/shell/shell.html',
		controller: 'researcherShellController',		
		parent: 'shell'
	})
});