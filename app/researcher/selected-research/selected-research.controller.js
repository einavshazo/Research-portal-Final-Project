angular.module('orledor').controller('selectedResearchController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {


    var name = $stateParams.name;
    var id = $stateParams.id;
    

    $scope.name = name;
    $scope.id = id;
    $scope.userName = "(אנא בחר מטופל מתוך רשימת משתתפי המחקר)";
    

    LoadSpecificResearch(name);


    function LoadSpecificResearch(name) {
        $scope.researchDetails = [];
        $scope.sampleGroup = [];

        return firebase.child('researches').child(name).once('value')
        .then(function(researches) {

            var startDate = new Date(researches.child("_startDate").val());
            var date = new Date(startDate).toDateString("dd-MM-yyyy");

            $scope.researchDetails.push("תאריך תחילת המחקר: " + date);

            var endDate = new Date(researches.child("_endDate").val());
            var date = new Date(endDate).toDateString("dd-MM-yyyy");

            $scope.researchDetails.push("תאריך סיום המחקר: " + date);
            $scope.researchDetails.push("אלגוריתם התאמה: " + researches.child("_algorithm").val());


            $scope.sampleGroup = researches.child("_sampleGroup").val();

            // $scope.sampleGroup.forEach(function(item, index, object) {
            //     var sampleGroupArr = $scope.sampleGroup[index];
            //     console.log(sampleGroupArr);
            // });

        })
        .then(function() {
            $scope.$apply();
        });
    };


    $scope.init = function() {
       
        if($state.go('selected-research')){
            
            var startDate = " ", endDate = "";
    
            firebase.child('researches').child(name).once('value')
            .then(function(researches) {
    
                startDate = researches.child("_startDate").val();
                endDate = researches.child("_endDate").val();

                if (researches.child("_isFirstTime").val()) {
                   
                    console.log(researches.child("_isFirstTime").val());

                    //    לבטל את ההערה!!!!!
                    firebase.child('researches').child(name).update({_isFirstTime:false});      
                    
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
    
            firebase.child('researches').child(name).once('value')
            .then(function(researches) {
                $scope.dateArray = researches.child("_datesArr").child("0").val();             
            })
            .then(function() {
                $scope.$apply();
            });
    
        }
    
    };


    $scope.details = function(index) {

        var userName = $scope.sampleGroup[index];
        console.log("userName 1111111 " + userName);

        firebase.child('users').child(userName).once('value')
                    .then(function(user) {
                        $scope.userName = user.child("_firstName").val();
                        // console.log("userName 22222222 " + $scope.userName);
                    })
                    .then(function() {
                        $scope.$apply();
                    });
        // var num = researches._researchNumber;
        

        // $state.go('selected-research', {'name': name, 'id': num});
 
     }
 
    
});
