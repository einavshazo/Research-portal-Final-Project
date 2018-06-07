angular.module('orledor').service('mediaWatched' , function($http) {	
	 return $http.get('resources/mediaWatched.json')
			.then(function (respone) {
				return respone.data.map(function (media) {
                    return _.capitalize(media.name);
                });
			});
});