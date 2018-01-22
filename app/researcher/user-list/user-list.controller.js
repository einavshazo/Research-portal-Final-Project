angular.module('orledor').controller('userListController', function($scope, $mdDialog, $q, firebase, loggedUser) {

    loadAllUsers();

    $scope.addUserToArr = function(account, ev) {
        return $mdDialog.show({
            controller: 'addUserToArrController',
            templateUrl: 'app/researcher/user-list/add-user/add-user.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
            	account: account
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
