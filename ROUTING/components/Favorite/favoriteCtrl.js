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
            //self.addToServer();
            /*
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
              */
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
            $http.defaults.headers.delete = {"Content-Type": "application/json;charset=utf-8"};
            /*
            angular.forEach(self.serverData, function(poi){
                
                    return $http({
                        url: server_url + 'POI/save',
                        method: 'delete', 
                        data: poi
                    })
                    .then(function (param) {
                        return param;
                      }, function (param) {
                        return param;
                        });
                
            });
            */
           return $http({
               url: server_url + 'POI/save/deleteUserOrder',
               method: 'delete',
           })
           .then(function (param) {
               self.addToServer();
               alert("Success");
             },function (param) {
                 alert("There was a problem with the server"); }).catch(function (param) {alert("There was a problem with the server");  });
        };

        self.addToServer = function () {
            
            angular.forEach($scope.savedPOI, function(poi){
                
                    let url = server_url + 'POI/save/' + poi.PoiName;
                    return $http.post(server_url + 'POI/save/' + poi.PoiName, poi)
                    .then(function (param) {
                        return param;
                      }, function (param)
                      {
                          alert("Connection problem with the back-end server");
                      });

                
            });

          };
           
     }]);