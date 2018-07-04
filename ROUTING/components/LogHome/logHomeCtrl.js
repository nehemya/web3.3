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
        
        
        
    }]);