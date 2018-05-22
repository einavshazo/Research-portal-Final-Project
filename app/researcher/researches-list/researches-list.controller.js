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


    $scope.researchDetails = function(researches, ev) {

       var name = researches._researchName;
       var num = researches._researchNumber;
       
       console.log(name, num);
       $state.go('selected-research', {'name': name, 'id': num});

    }

});
