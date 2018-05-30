angular.module('orledor').controller('selectDatesController', function($scope, $mdDialog, $mdToast, $q, firebase, startDate, endDate) {

    // $scope.dates = {};
    console.log("ccc " + startDate);
     console.log("eeeee" + endDate);

    $scope.minDate = new Date(startDate);
    $scope.maxDate = new Date(endDate);

});
