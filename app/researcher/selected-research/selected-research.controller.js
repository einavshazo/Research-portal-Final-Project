angular.module('orledor').controller('selectedResearchController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {


    var name = $stateParams.name;
    var id = $stateParams.id;


    console.log(name, id);


    $scope.name = name;
    $scope.id = id;

    firebase.child("researches").orderByKey().equalTo(id).on("child_added", function(snapshot) {
    console.log(snapshot.key()); // on newer SDKs, this may be snapshot.key
  });

});
