angular.module('orledor').controller('selectedResearchController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {


    var name = $stateParams.name;
    var id = $stateParams.id;
    var mid_date;


    $scope.name = name;
    $scope.id = id;
    $scope.userName = "(אנא בחר מטופל מתוך רשימת משתתפי המחקר)";
    
    var clientDate = new Date();
    var  date  = new Date(clientDate).toDateString("dd-MM-yyyy");


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


    firebase.child('researches').child(name).once('value')
    .then(function(researches) {
                
            var startDate = new Date(researches.child("_startDate").val());
            var date_start = new Date(startDate).toDateString("dd-MM-yyyy");  
                
            var endDate = new Date(researches.child("_endDate").val());
            var date_end = new Date(endDate).toDateString("dd-MM-yyyy");
    
            mid_date = new Date((startDate.getTime() + endDate.getTime()) / 2);
    });


    $scope.details = function(index) {

        var userName = $scope.sampleGroup[index];
       
        console.log("userName 1111111 " + userName);

        
        firebase.child('users').child(userName).once('value')
                    .then(function(user) {
                        $scope.userName = user.child("_firstName").val();

                        if(clientDate >= mid_date && user.child("userResearches")
                        .child(name).child("questionnaireMidSample").val() == null)
                        {
                            alert("שים לב הגעת לאצמע תקופת המדגם ולכן עלייך למלא את 'טופס אמצע תקופת מדגם'. הנך מועבר לטופס.")
                            $state.go('questionnaire_mid_sample', {'userName': userName, 'researchName': name});
                            //להפוך את זה לחד פעמי אחרי יצירת הטבלה ב DB
                            
                        }

                        $scope.selectedDate = function(index)
                        {
                            var selectedDate = $scope.dateArray[index];

                            var number = $scope.dateArray.length;
                            number--;

                            if(index == 0)
                            {
                                $state.go('questionnaire2', {'userName': userName, 'researchName': name});
                            }
                            else if(index > 0 && index < number)
                            {
                                if(user.child("userResearches").child(name).child("questionnaire2").val() == null)
                                {
                                    alert("אין באפשרותך לקיים מפגש זה מאחר ולא מילאת את השאלון של המפגש הראשון");
                                }
                                else
                                {
                                    $state.go('questionnaire4', {'userName': userName, 'researchName': name});
                                }
                            }
                            else
                            {
                                if(user.child("userResearches").child(name).child("questionnaire4").val() == null)
                                {
                                    alert("אין באפשרותך לקיים מפגש זה מאחר ולא מילאת לפחות שאלון אחד מהמפגשים הקודמים");
                                }
                                else
                                {
                                    $state.go('questionnaire5', {'userName': userName, 'researchName': name});
                                }
                            }
                            
                        }
                    })
                    .then(function() {
                        $scope.$apply();
                    });
        // var num = researches._researchNumber;
        

        // $state.go('selected-research', {'name': name, 'id': num});
 
     }
 
    
});
