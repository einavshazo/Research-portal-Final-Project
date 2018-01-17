angular.module('orledor').service('loggedResearch', function($rootScope) {
	var loggedResearch;

	function setResearch(research) {
		loggedResearch = research;
		//$rootScope.$broadcast('user:logedin');
	}

	/*function logout() {
		loggedResearch = null;
		$rootScope.$broadcast('user:logedout');
	}*/

	function getResearch() {
		return loggedResearch;
	}

	return {
		setResearch: setResearch,
		//logout: logout,
		getResearch: getResearch
	};
})