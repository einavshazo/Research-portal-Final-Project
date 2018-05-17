angular.module('orledor').service('grade' , function($http) {	
	 return $http.get('resources/grade.json')
			.then(function (respone) {
				return respone.data.map(function (country) {
                    return _.capitalize(country.name);
                });
			});
});