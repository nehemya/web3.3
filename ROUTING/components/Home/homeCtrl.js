angular.module('citiesApp')
    .controller('homeCtrl', ['$location', '$scope', '$http','setHeadersToken', 'localStorageModel', function ($location, $scope, $http, setHeadersToken, localStorageModel) {
        self=this;
        let server_url='http://localhost:3000/';
        $scope.isLogged=$scope.$parent.isLogged;
        
        //get all pois
        $http.get(server_url + "POI/",{params:{poiName:"All"} } )
            .then(function(response)
            {
                $scope.pois = response.data;
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
            });
        //get the 3 rand poi
        $http.get(server_url + "POI/popular") //send the request
            .then(function(response)
            {
                $scope.rand3 = response.data;
                $scope.rand = [$scope.rand3[0].PoiName,$scope.rand3[1].PoiName,$scope.rand3[2].PoiName];
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
             });
        
        
        $scope.randFilter = function(poi){
            return ($scope.rand.indexOf(poi.PoiName) !== -1);
        };

        $scope.moveLog = function(){
            $location.path('/login');
        };

        $scope.moveReg = function(){
            $location.path('/register');
        };
        
        
    }]);