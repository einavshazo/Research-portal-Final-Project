angular.module('orledor').service('sampleGroups' , function($http) {	
	 return $http.get('resources/sampleGroups.json')
			.then(function (respone) {
				return respone.data.map(function (sampleGroups) {
                    return _.capitalize(sampleGroups.name);
                });
			});
});