angular.module('citiesApp')
    .controller('mainCtrl', ['$scope' ,'localStorageModel',
    function ($scope,localStorageModel) {
        self=this;
        if(localStorageModel.get('fa')){
            $scope.isLogged = true;
            $scope.username = localStorageModel.get('username');
        }
        else{
            $scope.isLogged = false;
            $scope.username = "";
            $scope.nFav = 0;
    
        }
        

    }]);