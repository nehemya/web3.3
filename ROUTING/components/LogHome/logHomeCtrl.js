angular.module('citiesApp')
    .controller('logHomeCtrl',
    ['$location', '$scope', '$http', 'localStorageModel','PoiService','setHeadersToken',
    function ( $location, $scope, $http,localStorageModel , PoiService, setHeadersToken) {
        self=this; 
        let server_url='http://localhost:3000/';
        $scope.isLogged = $scope.$parent.isLogged;
        if(PoiService.isLogged===false){
            $location.path('/');
            $scope.$parent.isLogged=false;
        }
        $scope.fav2Pois = PoiService.popCat;
        $scope.Hist = PoiService.last2Hist;

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