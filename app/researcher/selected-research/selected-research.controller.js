angular.module('orledor').controller('selectedResearchController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {


    var name = $stateParams.name;
    var id = $stateParams.id;
    

    $scope.name = name;
    $scope.id = id;
    // $scope.test = [];
    

    LoadSpecificResearch(name);


    
    // firebase.child("researches").orderByKey().equalTo(name).on("child_added", function(snapshot) {
    //   console.log(snapshot.key()); 
    //   // $scope.test = snapshot.child("_researchName").val(); 
    //   $scope.test = _.values(snapshot.val());


    //   // $scope.test.push("שם מחקר: " + snapshot.child("_researchName").val());
    //   // $scope.test.push("מספר מזהה: " + snapshot.child("_researchNumber").val());
    //   // $scope.test.push("תאריך התחלה: " + snapshot.child("_startDate").val());
    //   // $scope.test.push("תאריך סיום: " + snapshot.child("_endDate").val());



    //   $scope.$apply();
    // });


  //   function LoadSpecificResearch(name) {
  //     $scope.researchDetails = [];

  //     return firebase.child("researches").orderByKey().equalTo(name).on("child_added", function(snapshot) {
  //     console.log(snapshot.key()); 
  //     $scope.researchDetails = _.values(snapshot.val());

  //     console.log($scope.researchDetails);

  //     $scope.$apply();
  //   });

  // };

  
    function LoadSpecificResearch(name) {
        $scope.researchDetails = [];

        return firebase.child('researches').child(name).once('value')
        .then(function(researches) {
            $scope.researchDetails = _.values(researches.val());
        })
        .then(function() {
            $scope.$apply();
        });
    };

    // if(!flag)
    // {
        // console.log(flag);
        // flag = true;
        $scope.init = function() {

            console.log("ssssssss");
        
            var startDate = " ", endDate = "";
    
            firebase.child('researches').child(name).once('value')
            .then(function(researches) {
    
                startDate = researches.child("_startDate").val();
                endDate = researches.child("_endDate").val();

                if (researches.child("_isFirstTime").val()) {
                   
                   console.log(researches.child("_isFirstTime").val());
                   
                //    researches.child("_isFirstTime").val(false);

                    // console.log("aaaaaaa" + researches.child("_isFirstTime").val());

                    firebase.child('researches').child(name).update({_isFirstTime:false});
                    
                    $mdDialog.show({
                        controller: 'selectDatesController',
                        templateUrl: 'app/researcher/select-dates/select-dates.html',
                        clickOutsideToClose: true,
                        locals: {
                            startDate: startDate,
                            endDate: endDate
                        }   
                    });
                }
            }); 
        };
    // }

    
});
