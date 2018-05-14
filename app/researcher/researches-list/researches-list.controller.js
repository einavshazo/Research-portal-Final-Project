angular.module('orledor').controller('researchesListController', function($scope, $state, $mdDialog, firebase, loggedResearch) {

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


    $scope.researchDetails = function(research, ev) {

       $state.go('selected-research');

       console.log(aaaaaa);

    }

});
