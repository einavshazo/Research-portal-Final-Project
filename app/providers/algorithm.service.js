angular.module('orledor').service('algorithm' , function($http) {	
	 return $http.get('resources/algorithm.json')
			.then(function (respone) {
				return respone.data.map(function (country) {
                    return _.capitalize(country.name);
                });
			});
});