angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire_mid_sample', {
		url: '/questionnaire_mid_sample?userName&researchName',
		params: {'userName': null, 'researchName': null},
		templateUrl: 'app/questionnaire-mid-sample/questionnaire-mid-sample.html',
		controller: 'questionnaireMidSampleController',
		parent: 'shell'
	})
});