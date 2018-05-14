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


    $scope.researchDetails = function(ev) {

        var aaaaaa;
      //  aaaaaa = researches._researchName;
        //firebase.child('researches').once('value')
     //   .then(function(researches) {
    //        aaaaaa = researches.__researchName;
      //  });
      //  .then(function() {
      //      $scope.$apply();
      //  });
       // alert(aaaaaa);

       console.log(aaaaaa);

       /* if(flag == true){

            firebase.child('researches')
                .child($scope.research._researchName)
                .update($scope.research);
            
            $state.go('researches-list');

            alert("aaaaaa");
        }
        else
        {
            alert("dfdfgf")
        }*/
    }

   /* function aaaaaa() {
        alert("fffffffff");
    };*/

});
