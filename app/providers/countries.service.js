angular.module('orledor').service('countries' , function($http) {	
	 return $http.get('resources/countries.json')
			.then(function (respone) {
				return respone.data.map(function (country) {
                    return _.capitalize(country.name);
                });
			});
});