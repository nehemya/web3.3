angular.module('citiesApp')
    .controller('mainCtrl', ['$scope' ,'localStorageModel',
    function ($scope,localStorageModel) {
        self=this;
        $scope.isLogged = false;
        $scope.username = "";


    }]);