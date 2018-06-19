angular.module('citiesApp')
    .controller('favoriteCtrl', ['$location', '$scope', '$http', 'localStorageModel', 'FavoriteService',
    function ($location, $scope, $http, localStorageModel, FavoriteService) { 

        let self = this;
        let server_url='http://localhost:3000/';
        $scope.savedPOI = FavoriteService.loclaData;
        self.serverData = FavoriteService.serverData;
       

        $scope.saveChanges = function()
        {
            for (let i = 0; i < $scope.savedPOI.length; i++)
            {
                $scope.savedPOI[i].place = i + 1;
            }      

            self.deleteFromServer();
            self.addToServer();
            let data = {};
            data.pois = $scope.savedPOI;
            $http.post(server_url + 'POI/save', data)
            .then(function(response){
                alert('Success');
                return;
            }, function (param) {
                alert("Connection problem with the back-end server");
                return;
              });
        };

        $scope.moveUp = function(index)
        {
            if (index > 0)
            {
                let rowToSwap = $scope.savedPOI[index - 1];
                $scope.savedPOI[index - 1] = $scope.savedPOI[index];
                $scope.savedPOI[index] = rowToSwap;
                FavoriteService.loclaData = $scope.savedPOI;
            }
        };

        $scope.moveDown = function(index)
        {
            if (index < $scope.savedPOI.length - 1)
            {
                let rowToSwap = $scope.savedPOI[index + 1];
                $scope.savedPOI[index + 1] = $scope.savedPOI[index];
                $scope.savedPOI[index] = rowToSwap;
                FavoriteService.loclaData = $scope.savedPOI;
            }
        };

       

        self.deleteFromServer = function()
        {
            for (let i = 0; i < self.serverData.length; i++)
            {
                let poi = self.serverData[i];
                if (-1 === $scope.savedPOI.indexOf(poi))
                {
                    $http.delete(server_url + 'POI/save', poi);
                }
            }
        };

        self.addToServer = function () {

            for (let i = 0; i < $scope.savedPOI.length; i++)
            {
                let poi = $scope.savedPOI[i];
                if (-1 === self.serverData.indexOf(poi))
                {
                    $http.post(server_url + 'POI/save/' + PoiName, poi);
                }
            }
          };
           
     }]);