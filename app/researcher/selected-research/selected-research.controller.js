angular.module('orledor').controller('selectedResearchController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {

  // loadAllResearches();

    var name = $stateParams.name;
    var id = $stateParams.id;


    console.log(name, id);


    $scope.name = name;
    $scope.id = id;

    firebase.child("researches").orderByKey().equalTo(name).on("child_added", function(snapshot) {
    console.log(snapshot.key()); // on newer SDKs, this may be snapshot.key
    });


    var ref = firebase.child("researches/" + name);
    ref.once("value")
    .then(function(snapshot) {
    $scope.test = snapshot.child("_researchName").val(); 
    $scope.rname = snapshot.child("_algorithm").val(); 
    });


  // function loadAllResearches() {
  //   $scope.allResearches = [];

  //   return firebase.child('researches/' + name).once('value')
  //       .then(function(researches) {
  //         var name1 = researches.child("researches._researchName").val();
  //       })
  //       .then(function() {
  //           $scope.$apply();
  //       });
  // };


});
