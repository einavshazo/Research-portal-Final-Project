angular.module('orledor')
	.controller('researcherController', function($scope, $state, $mdDialog, $q, firebase, loggedUser, languages, 
										countries, ages, musicStyle) {

		
		$scope.user = {};

		languages
		.then(function (res) {
			$scope.languages = res;
		})

		ages
		.then(function (res) {
			$scope.ages = res;
		})

		musicStyle
		.then(function (res) {
			$scope.musicStyle = res;
		})

		countries
		.then(function (res) {
			$scope.countries = res;
		})
		
		.then(function () {
			$scope.$apply();
		});



		$scope.researcher = function(ev) {
			return ensureResearcher()
				.catch(function (err) {
					$mdDialog.show(
							$mdDialog.alert()
							.clickOutsideToClose(true)
							.textContent(err)
							.ok('OK')
							.targetEvent(ev));

					return $q.reject();
				})
				.then(function() {
					return firebase.child('researches').child($scope.user._researchName).set($scope.user);										

					//return firebase.child("researches").child($scope.user._userResearcher).once("value");
				})
		}

	//	function ensureResearcher() {
			/*if(!$scope.user._userResearcher) {
				return $q.reject('נא למלא שם מחקר');
			}
			if(!$scope.user._ages) {
				return $q.reject('נא לבחור קבוצת גיל');
			}

			if(!$scope.user._language) {
				return $q.reject('נא לבחור לפחות שפה אחת');
			}

			if(!$scope.user._musicStyle) {
				return $q.reject('נא לבחור לפחות סגנון מוזיקלי אחד');
			}

			if(!$scope.user._countries) {
				return $q.reject('נא לבחור ארץ לידה');
			}*/

		//	return $q.resolve();
	//	}
	});