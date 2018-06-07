angular.module('orledor')
	.controller('questionnaireMidSampleController', function ($scope, $state, $stateParams, $mdDialog, $q, $http, firebase, loggedUser, grade, mediaWatched) {
		
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

			
		mediaWatched
		.then(function (res) {
			$scope.mediaWatched = res;
		})



		$scope.questionnaireMidSample = function (ev) {
			return ensurequestionnaireMidSample()
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
					.child($scope.researchName).child("questionnaireMidSample").child(date).set({
						_love : 				$scope.questionnaireMidSample._love,
						_media: 				$scope.questionnaireMidSample._media,
						_continue: 				$scope.questionnaireMidSample._continue,
						_interest_in_others_txt:$scope.questionnaireMidSample._interest_in_others_txt,
						_other_media: 			$scope.questionnaireMidSample._other_media,
						another_question_1_txt: $scope.questionnaireMidSample.another_question_1_txt,
						another_question_1_num: $scope.questionnaireMidSample.another_question_1_num,
						another_question_2_txt: $scope.questionnaireMidSample.another_question_2_txt,
						another_question_2_num:	$scope.questionnaireMidSample.another_question_2_num,
						
						_introvert_num:			$scope.questionnaireMidSample._introvert_num,
						_curious_num:			$scope.questionnaireMidSample._curious_num,
						_enthusiastic_num:		$scope.questionnaireMidSample._enthusiastic_num,
						_talker_num:			$scope.questionnaireMidSample._talker_num,
						_tired_num:				$scope.questionnaireMidSample._tired_num,
						_apathetic_num:			$scope.questionnaireMidSample._apathetic_num,
						_personal_life_num:		$scope.questionnaireMidSample._personal_life_num,
						_interest_in_others_num:$scope.questionnaireMidSample._interest_in_others_num,
						
						_watched_media_txt:		$scope.questionnaireMidSample._watched_media_txt,
						_general_impression:	$scope.questionnaireMidSample._general_impression,
						_emotional_response_txt:$scope.questionnaireMidSample._emotional_response_txt,
						_physical_reaction_txt:	$scope.questionnaireMidSample._physical_reaction_txt,
						_physical_change_txt:	$scope.questionnaireMidSample._physical_change_txt,
						_emotional_change_txt:	$scope.questionnaireMidSample._emotional_change_txt,
						
						_watched_media_num:		$scope.questionnaireMidSample._watched_media_num,
						_other_detail_txt:		$scope.questionnaireMidSample._other_detail_txt,
						
						_emotional_response_num:$scope.questionnaireMidSample._emotional_response_num,
						_physical_reaction_num:	$scope.questionnaireMidSample._physical_reaction_num,
						_physical_change_num:	$scope.questionnaireMidSample._physical_change_num,
						_emotional_change_num:	$scope.questionnaireMidSample._emotional_change_num
					});									
				})
				.then(function () {
					$state.go('selected-research', {'name': $scope.researchName, 'id': $scope.researchNumber});
				})
				.catch(function (err) {
					console.log(err);
				});
		}

		function ensurequestionnaireMidSample() {
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