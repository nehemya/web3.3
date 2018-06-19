angular.module('citiesApp').service('FavoriteService', ['$http', 'localStorageModel','setHeadersToken', function($http, localStorageModel, setHeadersToken){

    var self = this;
    let server_url = 'http://localhost:3000/';
    self.serverData = [];
    self.loclaData = [];

    self.favoritePrep = function()
    {
        
        if(localStorageModel.get('token')==null){
            setHeadersToken.set("");
        }
        else{
           setHeadersToken.set(localStorageModel.get('token')); 
        }
        
        return $http.get(server_url + 'POI/save')
        .then(function(response){
            
            self.serverData = response.data;
            self.loclaData = response.data;
            return response.data;
        }, function(response)
        {
            alert("Connection problem with the back-end server");
            return response;
        });
    };

}]);