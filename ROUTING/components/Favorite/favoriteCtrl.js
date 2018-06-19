angular.module('citiesApp')
    .controller('favoriteCtrl', ['$location', '$scope', '$http', 'localStorageModel', 'FavoriteService', 
    function ($location, $scope, $http, localStorageModel, FavoriteService) { 

        let self = this;
        let server_url='http://localhost:3000/';
        $scope.savedPOI = localStorageModel.get('favorite');
        self.serverData = FavoriteService.serverData;
       

        $scope.moveUp = function(index)
        {
            if (index > 0)
            {
                let rowToSwap = $scope.savedPOI[index - 1];
                $scope.savedPOI[index - 1] = $scope.savedPOI[index];
                $scope.savedPOI[index] = rowToSwap;
                localStorageModel.update('favorite', $scope.savedPOI);
            }
        };

        $scope.moveDown = function(index)
        {
            if (index < $scope.savedPOI.length - 1)
            {
                let rowToSwap = $scope.savedPOI[index + 1];
                $scope.savedPOI[index + 1] = $scope.savedPOI[index];
                $scope.savedPOI[index] = rowToSwap;
                localStorageModel.update('favorite', $scope.savedPOI);
            }
        };

        $scope.saveChanges = function()
        {
            for (let i = 0; i < $scope.savedPOI.length; i++)
            {
                $scope.savedPOI[i].place = i;
            }      

           
        };
        
     }]);