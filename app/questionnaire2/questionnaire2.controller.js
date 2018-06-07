angular.module('orledor')
	.controller('questionnaire2Controller', function ($scope, $state, $stateParams, $mdDialog, $q, $http, firebase, loggedUser, grade) {

		var userName = $stateParams.userName;
		var researchName = $stateParams.researchName;

		var clientDate = new Date();		
		var  date  = new Date(clientDate).toDateString("dd-MM-yyyy");


		firebase.child('users').child(userName).once('value')
        .then(function(user) {
			$scope.userName = user.child("_firstName").val();
        })
        .then(function() {
                $scope.$apply();
		});
		
		firebase.child('researches').child(researchName).once('value')
        .then(function(research) {
			$scope.researchName = research.child("_researchName").val();
        })
        .then(function() {
                $scope.$apply();
        });
 
//--------------------------------------------------------------------------------------------


		grade
		.then(function (res) {
			$scope.grade = res;
		})


		$scope.questionnaire2 = function (ev) {
			return ensureQuestionnaire2()
				.catch(function (err) {
					$mdDialog.show(
						$mdDialog.alert()
							.clickOutsideToClose(true)
							.textContent(err)
							.ok('OK')
							.targetEvent(ev));

					return $q.reject();
				})
				.then(function () {

					return firebase.child('users').child(userName).child("userResearches")
					.child($scope.researchName).child("questionnaire2").child(date).set({
						_userName : 			$scope.questionnaire2._userName,
						_fullName: 				$scope.questionnaire2._fullName,
						_department: 			$scope.questionnaire2._department,
						_yearOfBirth: 			$scope.questionnaire2._yearOfBirth,

						_Physically_txt: 		$scope.questionnaire2._Physically_txt,
						_mental_txt: 			$scope.questionnaire2._mental_txt,
						_family_relation_txt: 	$scope.questionnaire2._family_relation_txt,
						_social_connection_txt: $scope.questionnaire2._social_connection_txt,
						
						_Physically_num:		$scope.questionnaire2._Physically_num,
						_mental_num:			$scope.questionnaire2._mental_num,
						_family_relation_num:	$scope.questionnaire2._family_relation_num,
						_social_connection_num:	$scope.questionnaire2._social_connection_num,
						
						_introvert_txt:			$scope.questionnaire2._introvert_txt,
						_curious_txt:			$scope.questionnaire2._curious_txt,
						_enthusiastic_txt:		$scope.questionnaire2._enthusiastic_txt,
						_talker_txt:			$scope.questionnaire2._talker_txt,
						_tired_txt:				$scope.questionnaire2._tired_txt,
						_apathetic_txt:			$scope.questionnaire2._apathetic_txt,
						_personal_life_txt:		$scope.questionnaire2._personal_life_txt,
						_activities_txt:		$scope.questionnaire2._activities_txt,
						_food_txt:				$scope.questionnaire2._food_txt,
						_sleep_txt:				$scope.questionnaire2._sleep_txt,
						
						_introvert_num:			$scope.questionnaire2._introvert_num,
						_curious_num:			$scope.questionnaire2._curious_num,
						_enthusiastic_num:		$scope.questionnaire2._enthusiastic_num,
						_talker_num:			$scope.questionnaire2._talker_num,
						_tired_num:				$scope.questionnaire2._tired_num,
						_apathetic_num:			$scope.questionnaire2._apathetic_num,
						_personal_life_num:		$scope.questionnaire2._personal_life_num,
						_activities_num:		$scope.questionnaire2._activities_num,
						_food_num:				$scope.questionnaire2._food_num,
						_sleep_num:				$scope.questionnaire2._sleep_num
					});

				})
				.then(function () {
					$state.go('questionnaire3', {'userName': userName, 'researchName': $scope.researchName});
				})
				.catch(function (err) {
					console.log(err);
				});
		}

		function ensureQuestionnaire2() {
			// if (!$scope.user._userName) {
			// 	return $q.reject('חובה למלא שם משתמש')
			// }

			// if (!$scope.user._password) {
			// 	return $q.reject('חובה למלא סיסמא')
			// }

			// if ($scope.user._password !== $scope.retypePassword) {
			// 	return $q.reject('הסיסמא והוידאוי סיסמא אינם תואמים')
			// }

			// if (!$scope.user._firstName) {
			// 	return $q.reject('חובה למלא שם מלא')
			// }

			// if (!$scope.selectedBirthDate) {
			// 	return $q.reject('חובה למלא תאריך לידה')
			// }

			// if (!$scope.user._language || !$scope.user._language.length) {
			// 	return $q.reject('חובה למלא לפחות שפה מדוברת אחת')
			// }

			return $q.resolve();
		}
	});