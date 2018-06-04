angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire3', {
		url: '/questionnaire3?userName',
		params: {'userName': null},
		templateUrl: 'app/questionnaire3/questionnaire3.html',
		controller: 'questionnaire3Controller',
		parent: 'shell'
	})
});