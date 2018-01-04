angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('researcher-home', {
		url: '/researcher-home',
		templateUrl: 'app/researcher/home/researcher-home.html',
		controller: 'researcherHomeController',
		parent: 'researcherShell'
	})
});