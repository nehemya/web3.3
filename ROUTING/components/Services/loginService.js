angular.module("citiesApp").service('loginService',['$http', function ($http) {
    
    var self = this;
    self.countries = [];
    let server_url = 'http://localhost:3000/';
    self.loginPrep = function()
    {
        return $http.get(server_url + "/countries")
        .then()
    }
  }]);