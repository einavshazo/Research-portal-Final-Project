angular.module('orledor').controller('addUserToArrController', function($scope, $mdDialog, $mdToast, $q, firebase, account, researchName, researchNumber) {
    $scope.account = angular.copy(account);

   // console.log(researchName);

    var initIsParticipantWatch = false;
    $scope.$watch('account._isResearchParticipant', function () {
        if(initIsParticipantWatch) {
            $mdToast.show($mdToast.simple().textContent('הוספת משתמש למחקר'));
        } 
        initIsParticipantWatch = true; 
    });


    $scope.save = function() {
        return validateUser()
            .then(function() {
                return $mdDialog.hide($scope.account)
            })
            .catch(function(err) {
                $mdToast.show($mdToast.simple().textContent(err));
                return $q.reject(err);
            });
    }


    function validateUser() {

        return $q.resolve();
    }
});
