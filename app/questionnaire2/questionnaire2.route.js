angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire2', {
		url: '/questionnaire2?userName',
		params: {'userName': null},
		templateUrl: 'app/questionnaire2/questionnaire2.html',
		controller: 'questionnaire2Controller',
		parent: 'shell'
	})
});