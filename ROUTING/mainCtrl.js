angular.module('citiesApp')
    .controller('mainCtrl', ['$scope' ,'localStorageModel','$location',
    function ($scope,localStorageModel,$location) {
        self=this;
        if(localStorageModel.get('token')){
            $scope.isLogged = true;
            $scope.username = localStorageModel.get('username');
            $location.path('/logHome');
        }
        else{
            $scope.isLogged = false;
            $scope.username = "";
            $scope.nFav = 0;
    
        }

        $scope.logout = function () {
            if(localStorageModel.get('token')){
                localStorageModel.update('token', null);
                localStorageModel.update('username',null);
            }
            else{
                localStorageModel.add('token', null);
                localStorageModel.add('username',null);
            }
            $scope.isLogged = false;
          };

          $scope.getPoi = function(poi)
        {
            poi.numOfViews += 1;
            return $http.get(server_url + 'POI/', {params:{poiName:poi.PoiName} })
            .then(function (response) {

                poi=response.data;

              }, function(response){
                alert("Connection problem with the back-end server");
                return response;
              });
        }; 

    }]);