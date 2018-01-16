angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('user-list', {
		url: '/user-list',
		templateUrl: 'app/researcher/user-list/user-list.html',
		controller: 'userListController',
		parent: 'researcherShell'
	})
});