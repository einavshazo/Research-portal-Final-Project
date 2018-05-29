var app = angular.module('orledor').controller('selectDatesController', function($scope, $state, $stateParams, $mdDialog, firebase, loggedResearch) {

    
    this.myDate = new Date();

    this.minDate = new Date(
      this.myDate.getFullYear(),
      this.myDate.getMonth() - 2,
      this.myDate.getDate()
    );
  
    this.maxDate = new Date(
      this.myDate.getFullYear(),
      this.myDate.getMonth() + 2,
      this.myDate.getDate()
    );

});
