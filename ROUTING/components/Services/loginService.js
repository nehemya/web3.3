angular.module("citiesApp").service('loginService', ['$http', function($http){

    var self = this;
    let server_url = 'http://localhost:3000/';
    self.countries = [];

    self.loginPrep = function(){
        return $http.get(server_url + '/countries')
        .then(function(response){
            self.countries =response.data;
            return response;
        });
    }, function(response)
    {
        alert("Connection problem with the back-end server");
                return response;
    }
}]);