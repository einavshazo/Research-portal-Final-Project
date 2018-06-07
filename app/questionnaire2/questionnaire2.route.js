angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire2', {
		url: '/questionnaire2?userName&researchName',
		params: {'userName': null, 'researchName': null},
		templateUrl: 'app/questionnaire2/questionnaire2.html',
		controller: 'questionnaire2Controller',
		parent: 'shell'
	})
});