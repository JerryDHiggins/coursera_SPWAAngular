(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchList = "";
        $scope.message = "";
        $scope.messageColor="";
        $scope.borderColor="";
        $scope.checkFood = function() {
            var foods = $scope.lunchList.trim().split(",");
            if ((foods.length == 1) && (foods[0]=="")) {
                $scope.message = "";
                $scope.borderColor="gray";
                return;
            }
            if (foods.length > 3) {
                $scope.message = "Too Much";
                $scope.messageColor="red";
                $scope.borderColor="red";
            } else {
                $scope.message = "Enjoy!";
                $scope.messageColor="green";
                $scope.borderColor="green";
            }
        };
    };
})();