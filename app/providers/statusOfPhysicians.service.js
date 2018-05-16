angular.module('orledor').service('statusOfPhysicians' , function($http) {	
	 return $http.get('resources/statusOfPhysicians.json')
			.then(function (respone) {
				return respone.data.map(function (country) {
                    return _.capitalize(country.name);
                });
			});
});