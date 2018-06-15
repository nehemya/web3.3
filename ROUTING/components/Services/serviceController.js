angular.module('citiesApp').service('setHeadersToken', [ '$http', function($http){
    var token = "";

    this.set = function (t)
    {
        
            token = t;
            $http.defaults.headers.common[ 'token' ] = t;
            console.log("set");
       
        
        
    };
}]);