angular.module('orledor').service('musicStyle' , function($http) {	
	 return $http.get('resources/musicStyle.json')
			.then(function (respone) {
				return respone.data.map(function (musicStyle) {
                    return _.capitalize(musicStyle);
                });
			});
});