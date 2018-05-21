angular.module('orledor').config(function($stateProvider) {
	$stateProvider
	.state('questionnaire10', {
		url: '/questionnaire10',
		templateUrl: 'app/questionnaire10/questionnaire10.html',
		controller: 'questionnaire10Controller',
		parent: 'shell'
	})
});