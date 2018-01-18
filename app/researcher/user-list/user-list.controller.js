angular.module('orledor').controller('userListController', function($scope, $mdDialog, firebase, loggedUser) {

    loadAllUsers();




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
