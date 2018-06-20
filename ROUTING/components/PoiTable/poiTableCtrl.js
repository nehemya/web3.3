angular.module('citiesApp')
    .controller('poiTableCtrl', ['$scope', 'PoiService','FavoriteService', 
    function ($scope, PoiService, FavoriteService) {
        self=this
        $scope.Pois = PoiService.pois;
        $scope.isFav = FavoriteService.isFav;
        

        //todo

        $scope.addFavorit = function(ev, p){
            $(ev.currentTarget).children().toggleClass("addFav");
            FavoriteService.addToFav(p);
        }


    }]);