angular.module("citiesApp").service('RegisterService',['$http', function ($http) {
    
    var self = this;
    self.countries = [];
    self.categories = [];
    let server_url = 'http://localhost:3000/';
    self.registerPrep = function()
    {
        return $http.get(server_url + "countries")
        .then(function(response)
    {
        self.countries = response.data;
        return $http.get(server_url + 'POI/category')
        .then(function(response)
    {
        for (var index in response.data)
        {
            self.categories.push(response.data[index].CategoryName);
        }
        return response;
    },function(response){
        alert("Connection problem with the back-end server");
        return response;
    })
    }, function(response)
    {
        alert("Connection problem with the back-end server");
        return response;
    });
    };
  }]);