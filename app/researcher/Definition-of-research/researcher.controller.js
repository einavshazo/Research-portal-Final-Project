angular.module('orledor')
	.controller('researcherController', function($scope, $state, $mdDialog, $q, firebase, loggedResearch, languages, 
										countries, algorithm, sampleGroups, musicStyle) {

		
		$scope.research = {};
		var flag = false;

		algorithm
		.then(function (res) {
			$scope.algorithm = res;
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

					$scope.research._startDate = $scope.selectedStartDate.toISOString();
					$scope.research._endDate = $scope.selectedEndDate.toISOString();

					return firebase.child('researches').child($scope.research._researchName).set($scope.research);
				})
				.then(function (user) {
					loggedResearch.setResearch($scope.research);
				})
				.then(function () {
					$scope.allUsers();
					flag = true; 	//Checks if participants were selected in the study before defining the study
				})
				.catch(function (err) {
					console.log(err);
				});
		}
		
		$scope.allUsers = function(user, ev) {
			if($scope.research._researchName && $scope.research._researchNumber)
			{
				if (!$scope.research._sampleGroup) {
					$scope.research._sampleGroup = [];
				}
				return $mdDialog.show({
					controller: 'userListController',
					templateUrl: 'app/researcher/user-list/user-list.html',
					targetEvent: ev,
					clickOutsideToClose: true,
					locals: {
						user: user,
						researchName: $scope.research._researchName,
						researchNumber: $scope.research._researchNumber,
						sampleGroup: $scope.research._sampleGroup
					}
				})
				.then(function () {
					return loadAllUsers();
				})
				then(function(sampleGroup, research) {
					$scope.research._sampleGroup = sampleGroup;
				});
			}
			else
			{
				alert("חובה למלא שם מחקר ומספר מזהה");
			}
		}	
		

		$scope.save = function(ev) {

			if(flag == true){

				firebase.child('researches')
					.child($scope.research._researchName)
                	.update($scope.research);
				
				$state.go('researches-list');
			}
			else
			{
				alert("error")
			}
		}


		$scope.register = function(account, ev) {
			return $mdDialog.show({
				controller: 'registerController',
				templateUrl: 'app/register/register.html',
				targetEvent: ev,
				clickOutsideToClose: true,
				locals: {
					account: account
				}
			})

		};



		function ensureResearcher() {
			if(!$scope.research._researchName) {
				return $q.reject('נא למלא שם מחקר');
			}
			if(!$scope.research._researchNumber) {
				return $q.reject('נא למלא מספר מזהה למחקר');
			}
			if(!$scope.research._rearchParticipate) {
				return $q.reject('נא למלא משתתפי מחקר');
			}
			if(!$scope.research._researchProcess) {
				return $q.reject('נא למלא הליך מחקר');
			}
			if(!$scope.research._researchVariables) {
				return $q.reject('נא למלא משתני מחקר');
			}
		/*	if(!$scope.research._language) {
				return $q.reject('נא לבחור לפחות שפה אחת');
			}
			if(!$scope.research._musicStyle) {
				return $q.reject('נא לבחור לפחות סגנון מוזיקלי אחד');
			}
			if(!$scope.research._countries) {
				return $q.reject('נא לבחור ארץ לידה');
			}	*/
			if(!$scope.research._algorithm) {
				return $q.reject('נא לבחור אלגוריתם');
			}
			if(!$scope.selectedStartDate) {
				return $q.reject('נא לבחור תאריך התחלה');
			}
			if(!$scope.selectedEndDate) {
				return $q.reject('נא לבחור תאריך סיום');
			}


			return $q.resolve();
		}
});
