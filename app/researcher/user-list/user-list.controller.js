angular.module('orledor').controller('userListController', function($scope, $mdDialog, $q, firebase, loggedUser, researchName, researchNumber, sampleGroup) {

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
                sampleGroup.push(account._userName);
    
                firebase.child('users').child(user._userName).child("userResearches").once('value')
                .then(function(snapshot) {
                    const userData = snapshot.val();
                    if (userData) {
                        firebase.child('users').child(user._userName).child("userResearches").child(researchName).update({_userResearchName : researchName, _researchNumber : researchNumber});
                        console.log("exists!");
                    }
                    else
                    {
                        firebase.child('users').child(user._userName).child("userResearches").child(researchName).set({_userResearchName : researchName, _researchNumber : researchNumber});
                        console.log("not exists!");
                    }
                });
                
            }
            else
            {
                user._isResearchParticipant = true;
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
