angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('select-dates', {
		url: '/select-dates',
		templateUrl: 'app/researcher/select-dates/select-dates.html',
		controller: 'selectDatesController',
		parent: 'researcherShell'
	})
});


