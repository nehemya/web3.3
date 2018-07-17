angular.module('citiesApp')
    .controller('poiTableCtrl', ['$scope', '$http', 'PoiService','FavoriteService',
    function ($scope, $http, PoiService, FavoriteService) {
        var self=this;
        $scope.Pois = PoiService.pois;
        $scope.isFav = FavoriteService.isFav;
        $scope.isLogged = $scope.$parent.isLogged;
        let server_url='http://localhost:3000/';
        
        $scope.addFavorit = function(ev, p){
            $(ev.currentTarget).children().toggleClass("addFav");
            p.date = new Date().toISOString();
            FavoriteService.addToFav(p);
            $scope.$parent.$parent.$parent.nFav=FavoriteService.loclaData.length;
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