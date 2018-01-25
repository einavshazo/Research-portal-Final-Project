angular.module('orledor').controller('userListController', function($scope, $mdDialog, $q, firebase, loggedUser, researchName, researchNumber,sampleGroup) {

    loadAllUsers();


    $scope.addUserToArr = function(account, ev) {
        return $mdDialog.show({
            controller: 'addUserToArrController',
            templateUrl: 'app/researcher/user-list/add-user/add-user.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
                account: account,
                researchName: researchName,
                researchNumber: researchNumber
            }
        })
        .then(function (user) {
            if(user._isResearchParticipant == true)
            {
                user._userResearchName = researchName;
                user._researchNumber = researchNumber;
                sampleGroup.push(account._userName);
            }
            else
            {
                user._userResearchName = "";
                user._researchNumber = "";
                sampleGroup.forEach(function(item, index, object) {
                    if (item === account._userName) {
                      object.splice(index, 1);
                    }
                });
            }
        	return firebase.child('users')
				.child(user._userName)
                .update(user);
        })
        .then(function () {
        	return loadAllUsers();
        });
    };

    function loadAllUsers() {
        $scope.allUsers = [];

        return firebase.child('users').once('value')
            .then(function(users) {
                $scope.allUsers = _.values(users.val());
            })
            .then(function() {
                $scope.$apply();
            });
    };

    


});
