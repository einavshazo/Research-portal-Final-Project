angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire3', {
		url: '/questionnaire3?userName&researchName',
		params: {'userName': null, 'researchName': null},
		templateUrl: 'app/questionnaire3/questionnaire3.html',
		controller: 'questionnaire3Controller',
		parent: 'shell'
	})
});