angular.module('orledor').controller('userListController', function($scope, $mdDialog, $q, firebase, loggedUser) {

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

    var initIsResearcherWatch = false;
    $scope.$watch('user._isResearchParticipant', function () {
        if(initIsResearcherWatch) {
            $mdToast.show($mdToast.simple().textContent('שים לב! משתמש זה נוסף למחקר!'));
        } 
        initIsResearcherWatch = true;       
    });



   /* $scope.addUserToArry = function(user, ev){
        console.log(user._firstName);
        $scope.ccc = [];

        return firebase.child('users').once('value')
        .then(function(users) {
            $scope.ccc = _.values(users.val());
        })
        .then(function() {
            $scope.$apply();
        });

        console.log(_.values(users.val()));
    }*/
});
