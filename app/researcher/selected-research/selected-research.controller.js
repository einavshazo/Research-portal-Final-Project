angular.module('orledor').controller('selectedResearchController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {


    var name = $stateParams.name;
    var id = $stateParams.id;
    // var dateArray = [];
    

    $scope.name = name;
    $scope.id = id;
    // $scope.dateArray = [];
    
    

    LoadSpecificResearch(name);


    function LoadSpecificResearch(name) {
        $scope.researchDetails = [];

        return firebase.child('researches').child(name).once('value')
        .then(function(researches) {

            var startDate = new Date(researches.child("_startDate").val());
            var date = new Date(startDate).toDateString("dd-MM-yyyy");

            $scope.researchDetails.push("תאריך תחילת המחקר: " + date);

            var endDate = new Date(researches.child("_endDate").val());
            var date = new Date(endDate).toDateString("dd-MM-yyyy");

            $scope.researchDetails.push("תאריך סיום המחקר: " + date);
            $scope.researchDetails.push("משתתפי המחקר: " + researches.child("_sampleGroup").val());
            $scope.researchDetails.push("אלגוריתם התאמה: " + researches.child("_algorithm").val());

        })
        .then(function() {
            $scope.$apply();
        });
    };


    $scope.init = function() {
        
        var startDate = " ", endDate = "";
        // $scope.dateArray = [];
    
        firebase.child('researches').child(name).once('value')
        .then(function(researches) {
    
            startDate = researches.child("_startDate").val();
            endDate = researches.child("_endDate").val();

            if (researches.child("_isFirstTime").val()) {
                   
                console.log(researches.child("_isFirstTime").val());

                //    לבטל את ההערה!!!!!
                    // firebase.child('researches').child(name).update({_isFirstTime:false});      
                    
                $mdDialog.show({
                    controller: 'settingUpSessionsController',
                    templateUrl: 'app/researcher/setting-up-sessions/setting-up-sessions.html',
                    clickOutsideToClose: false,
                    locals: {
                        startDate: startDate,
                        endDate: endDate
                    }   
                })
                .then((temp) => {
                   
                    $scope.temp = temp;
                    // console.log("3333333 " + $scope.temp);

                    firebase.child('researches').child(name).update({_datesArr: $scope.temp}); 
                    
                    firebase.child('researches').child(name).once('value')
                    .then(function(researches) {
                        $scope.dateArray = researches.child("_datesArr").child("0").val();
                    })
                    .then(function() {
                        $scope.$apply();
                    });
                    
                });

            }           
        }); 
    
    };
    
});
