angular.module('orledor').controller('settingUpSessionsController', function($scope, $mdDialog, $mdToast, $q, firebase, startDate, endDate) {


    $scope.minDate = new Date(startDate);
    $scope.maxDate = new Date(endDate);


    $scope.send = function (ev) {

        // console.log($scope.daytime);

        var alldates = [];


        for (var i=0; $scope.daytime <= $scope.maxDate ; $scope.daytime.setDate($scope.daytime.getDate() + 7), i++) {
            var  date  = new Date($scope.daytime).toDateString("dd-MM-yyyy");
            alldates.push(date);
        }

        console.log("alldates " + alldates);

        $scope.temp = [alldates]
        // console.log($scope.temp);


        return $mdDialog.hide($scope.temp);
    }   

});
