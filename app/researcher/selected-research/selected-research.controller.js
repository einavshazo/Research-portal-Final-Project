angular.module('orledor').controller('selectedResearchController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {


    var name = $stateParams.name;
    var id = $stateParams.id;


    console.log(name, id);


    $scope.name = name;
    $scope.id = id;


    

});
