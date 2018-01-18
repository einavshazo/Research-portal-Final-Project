angular.module('orledor').controller('researchesListController', function($scope, $mdDialog, firebase, loggedResearch) {

    loadAllResearches();


    function loadAllResearches() {
        $scope.allResearches = [];

        return firebase.child('researches').once('value')
            .then(function(researches) {
                $scope.allResearches = _.values(researches.val());
            })
            .then(function() {
                $scope.$apply();
            });
    };

});
