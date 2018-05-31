angular.module('orledor').config(function($stateProvider) {
	$stateProvider.state('setting-up-sessions', {
		url: '/setting-up-sessions',
		templateUrl: 'app/researcher/setting-up-sessionss/setting-up-sessions.html',
		controller: 'settingUpSessionsController',
		parent: 'researcherShell'
	})
});


