angular.module('orledor').service('ages' , function($http) {	
	 return $http.get('resources/ages.json')
			.then(function (respone) {
				return respone.data.map(function (ages) {
                    return _.capitalize(ages.name);
                });
			});
});