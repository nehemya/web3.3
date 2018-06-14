angular.module('citiesApp').service('setHeadersToken', [ '$http', function($http){
    var token = "";

    this.set = function (t)
    {
        token = t;
        $http.defualts.headers.common[ 'token' ] = t;
        console.log("set");
    }
}]);