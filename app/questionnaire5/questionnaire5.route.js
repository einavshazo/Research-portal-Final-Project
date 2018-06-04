angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire5', {
		url: '/questionnaire5?userName',
		params: {'userName': null},
		templateUrl: 'app/questionnaire5/questionnaire5.html',
		controller: 'questionnaire5Controller',
		parent: 'shell'
	})
});