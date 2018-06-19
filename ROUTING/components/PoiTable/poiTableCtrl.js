angular.module('citiesApp')
    .controller('poiTableCtrl', ['$scope', 'PoiService', function ($scope, PoiService) {
        self=this
        $scope.Pois = PoiService.pois;

        //todo


    }]);