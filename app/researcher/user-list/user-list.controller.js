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
            
                // user._userResearchName = researchName;
                // user._researchNumber = researchNumber;
                sampleGroup.push(account._userName);
    
                // firebase.child('users').child(user._userName).child("_userResearchName").set({_userResearchName : researchName});
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
                // firebase.child('users').child(user._userName).child("userResearches").child(researchName).set({_userResearchName : researchName, _researchNumber : researchNumber});
                
            }
            // else
            // {
            //     // user._userResearchName = "";
            //     user._researchNumber = "";
            //     sampleGroup.forEach(function(item, index, object) {
            //         if (item === account._userName) {
            //           object.splice(index, 1);
            //         }
            //     });
            //     user._userResearchName.forEach(function(item, index, object) {
            //         if (item === researchName) {
            //           object.splice(index, 1);
            //         }
            //     });
            // }
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
