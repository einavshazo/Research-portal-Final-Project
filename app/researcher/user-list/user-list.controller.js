angular.module('orledor').controller('userListController', function($scope, $mdDialog, firebase, loggedUser) {

    loadAllUsers();

 /*   $scope.editAccount = function(user, ev) {
        return $mdDialog.show({
            controller: 'userListController',
            templateUrl: 'app/researcher/user-list/user-list.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
            	user: user
            }
        })
        .then(function (user) {
        	return firebase.child('users')
				.child(user._userName)
				.update(user);
        })
        .then(function () {
        	return loadAllUsers();
        });
    };*/


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
