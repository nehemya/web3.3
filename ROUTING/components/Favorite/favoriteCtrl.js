angular.module('citiesApp')
    .controller('favoriteCtrl', ['$location', '$scope', '$http', 'localStorageModel', 
    function ($location, $scope, $http, localStorageModel) { 

        let self = this;
        let server_url='http://localhost:3000/';
        $scope.savedPOI = localStorageModel.get('favorite');
        let numOfPOI = $scope.savedPOI.length;
        
       

        $scope.moveUp = function(index)
        {
            if (index > 0)
            {
                let rowToSwap = $scope.savedPOI[index - 1];
                $scope.savedPOI[index - 1] = $scope.savedPOI[index];
                $scope.savedPOI[index] = rowToSwap;
            }
        };

        $scope.moveDown = function(index)
        {
            if (index < $scope.savedPOI.length - 1)
            {
                let rowToSwap = $scope.savedPOI[index + 1];
                $scope.savedPOI[index + 1] = $scope.savedPOI[index];
                $scope.savedPOI[index] = rowToSwap;
            }
        };
        
     }]);