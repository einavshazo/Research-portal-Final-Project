angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire3', {
		url: '/questionnaire3',
		templateUrl: 'app/questionnaire3/questionnaire3.html',
		controller: 'questionnaire3Controller',
		parent: 'shell'
	})
});