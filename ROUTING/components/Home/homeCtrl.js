angular.module('citiesApp')
    .controller('homeCtrl',
    ['$location', '$scope', '$http', 'localStorageModel','PoiService',
    function ( $location, $scope, $http,localStorageModel , PoiService, ) {
        self=this; 
        let server_url='http://localhost:3000/';
        $scope.isLogged = $scope.$parent.isLogged;
        $scope.randPois = PoiService.rand3poi;
        

        $scope.moveLog = function(){
            $location.path('/login');
        };

        $scope.moveReg = function(){
            $location.path('/register');
        };
        
        $scope.showPoi = function(poi){
            poiModalService.showPoi(poi)
        }
        
    }]);