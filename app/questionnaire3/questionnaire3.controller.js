angular.module('orledor')
	.controller('questionnaire3Controller', function ($scope, $state, $stateParams, $mdDialog, $q, $http, firebase, loggedUser, grade) {
		
		
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
			$scope.researchNumber = research.child("_researchNumber").val();
        })
        .then(function() {
                $scope.$apply();
        });

//------------------------------------------------------------------------------
		grade
		.then(function (res) {
			$scope.grade = res;
		})


		$scope.questionnaire3 = function (ev) {
			return ensureQuestionnaire3()
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
					.child($scope.researchName).child("questionnaire3").child(date).set({
						_how_was_it:			$scope.questionnaire3._how_was_it,
						_feel:					$scope.questionnaire3._feel,
						_love : 				$scope.questionnaire3._love,
						_come_again:			$scope.questionnaire3._come_again,
						_interest_in_others_txt:$scope.questionnaire3._interest_in_others_txt,
						_other_media: 			$scope.questionnaire3._other_media,
						another_question_1_txt: $scope.questionnaire3.another_question_1_txt,
						another_question_1_num: $scope.questionnaire3.another_question_1_num,
						another_question_2_txt: $scope.questionnaire3.another_question_2_txt,
						another_question_2_num:	$scope.questionnaire3.another_question_2_num,
		
						_introvert_num:			$scope.questionnaire3._introvert_num,
						_curious_num:			$scope.questionnaire3._curious_num,
						_enthusiastic_num:		$scope.questionnaire3._enthusiastic_num,
						_talker_num:			$scope.questionnaire3._talker_num,
						_tired_num:				$scope.questionnaire3._tired_num,
						_apathetic_num:			$scope.questionnaire3._apathetic_num,
						_personal_life_num:		$scope.questionnaire3._personal_life_num,
						_interest_in_others_num:$scope.questionnaire3._interest_in_others_num,
						
						_emotional_response_txt:$scope.questionnaire3._emotional_response_txt,
						_physical_reaction_txt:	$scope.questionnaire3._physical_reaction_txt,
						_physical_change_txt:	$scope.questionnaire3._physical_change_txt,
						_agree_to_exit_txt:		$scope.questionnaire3._agree_to_exit_txt,
											
						_emotional_response_num:$scope.questionnaire3._emotional_response_num,
						_physical_reaction_num:	$scope.questionnaire3._physical_reaction_num,
						_physical_change_num:	$scope.questionnaire3._physical_change_num,
						_agree_to_exit_num:		$scope.questionnaire3._agree_to_exit_num
					});														
				})
				.then(function () {
					$state.go('selected-research', {'name': $scope.researchName, 'id': $scope.researchNumber});
				})
				.catch(function (err) {
					console.log(err);
				});
		}

		function ensureQuestionnaire3() {
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