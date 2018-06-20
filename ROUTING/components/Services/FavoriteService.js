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
        if (self.serverData.length === 0)
        {
            return $http.get(server_url + 'POI/save')
            .then(function(response){
                self.serverData = response.data;
                if (self.loclaData.length === 0)
                {
                    self.loclaData = response.data;
                }
                
                return response.data;
            }, function(response)
            {
                alert("Connection problem with the back-end server");
                return response;
            }); 
        }
        
    };
    self.addToFav = function(poi){
        if(self.loclaData.includes(poi) == false){
            self.loclaData.push(poi);
        }
        else {
            for(var i = self.loclaData.length - 1; i >= 0; i--) {
                if(self.loclaData[i] === poi) {
                   array.splice(i, 1);
                }
            }
        }
        
    }

    self.isFav = function(poi){
        if(self.loclaData.includes(poi) != false){
            return true;
        }
        return false;
    }


}]);